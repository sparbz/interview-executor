import { SimpleFlow } from "src/entities";

// Sample data for a simple flow
export const sampleFlow: SimpleFlow = {
    id: 'flow1',
    name: 'Sample Flow',
    description: 'A sample flow for demonstration purposes',
    tasks: [
      { id: 'task1', name: 'Sample Task 1', dependencies: [] },
      { id: 'task2', name: 'Sample Task 2', dependencies: ['task1'] }, // task2 depends on task1
    ],
  };
  
  // Sample data for a simple task, which could also be part of the flow's tasks
export const sampleTask = {
    id: 'task1',
    name: 'Sample Task 1',
    type: 'CUSTOM',
  };
  