import { DurableObject } from "cloudflare:workers";
import { createModels } from "@earendil-works/pi-ai/models";
import { createRegistry, Harness } from "@earendil-works/pi-durable";
import { PiHarness } from "agents/harness/pi";
import { Lifecycle } from "agents/lifecycle";
import { createAI } from "agents/models/pi-ai";
import { routeAgentRequest } from "agents/routing";

export class Assistant extends DurableObject<Env> {
	// Workers AI models, through the AI binding
	ai = createAI({ binding: this.env.AI });
	// Pi's tools and prompt sections. Create one per object.
	registry = createRegistry();

	// The harness: the Pi agent loop, stored in this object's database
	harness = new PiHarness({
		harness: ({ storage, context, onWake }) => {
			const models = createModels();
			models.setProvider(this.ai.provider);
			return Harness.open(
				storage,
				{ models, registry: this.registry, onWake },
				context,
			);
		},
		defaults: { model: this.ai("@cf/deepseek-ai/deepseek-v4.1-flash-1017") },
	});

	// The Lifecycle starts the harness inside the Durable Object
	lifecycle = Lifecycle.install(this).use(this.harness);

	async onRequest(request: Request) {
		if (request.method !== "POST") {
			return Response.json(await this.harness.messages());
		}
		const { status, text } = await this.harness.prompt(await request.text());
		return Response.json({ status, text });
	}
}

export default {
	async fetch(request, env) {
		return (
			(await routeAgentRequest(request, env)) ??
			new Response("Not found", { status: 404 })
		);
	},
} satisfies ExportedHandler<Env>;
