/**
 * Configuration interface for a parameter in a tool
 * @interface ParameterConfig
 */
export interface ParameterConfig {
    /** The name of the parameter */
    name: string;
    /** The data type of the parameter */
    type: string;
    /** Description explaining the parameter's purpose and usage */
    description: string;
    /** Example value for the parameter */
    example: string;
}

/**
 * Configuration interface for a tool that can be used by an agent
 * @interface ToolConfig
 */
export interface ToolConfig {
    /** Unique identifier for the tool */
    name: string;
    /** Display name for the tool */
    label: string;
    /** The type of tool - either 'action' for command execution or 'response' responding with text to user */
    type: 'action' | 'response';
    /** Detailed description of what the tool does */
    description: string;
    /** Array of parameters required by the tool */
    parameters: ParameterConfig[];
    /** Function to execute the tool with given arguments */
    execute: (args: { [key: string]: string }) => Promise<string>;
}

/**
 * Configuration interface for an agent's capabilities and behavior
 * @interface AgentConfig
 */
export interface AgentConfig {
    /** Name of the agent */
    name: string;
    /** Unique identifier for the agent */
    agentId: string;
    /** Description of the agent's role and capabilities */
    description: string;
    /** The primary purpose or objective of the agent */
    purpose: string;
    /** Array of tools available to the agent */
    tools: ToolConfig[];
    /** Categorized rules that govern the agent's behavior */
    rules: {
        /** Category name for a group of rules */
        category: string;
        /** Array of rule statements in this category */
        items: string[];
    }[];
    /** Optional template variables that can be used in prompt generation */
    templateVariables?: {
        /** Name of the template variable */
        name: string;
        /** Data type of the template variable */
        type: string;
        /** Description of the template variable's purpose */
        description: string;
    }[];
}
