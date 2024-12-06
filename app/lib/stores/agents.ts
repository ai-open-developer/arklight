import { map, type MapStore } from "nanostores";
import type { Agent } from "../agent/core/agent";

type AgentMap = Record<string, Agent>;

export class AgentsStore {
    registry: MapStore<AgentMap> = import.meta.hot?.data.agents ?? map({});
    constructor() {
        if (import.meta.hot) {
            import.meta.hot.data.agents = this.registry;
        }
    }
    addAgent(agent: Agent) {
        this.registry.setKey(agent.getConfig().agentId, agent);
    }
    getAgent(id: string) {
        return this.registry.get()[id];
    }
    get agents(){
        return this.registry.get();  
    }

}

export const agentsStore = new AgentsStore();