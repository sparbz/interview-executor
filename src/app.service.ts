import { Injectable, Logger } from '@nestjs/common';
import { sampleFlow } from './data';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor() {}

  async executeFlow(flowId: string): Promise<void> {
    const flow = sampleFlow.id === flowId ? sampleFlow : null;

    if (!flow) {
      throw new Error('Flow not found');
    }

    this.logger.log(`Executing flow: ${flow.name}`);

    // Building the graph
    const taskGraph = this.buildGraph(flow.tasks);

    // Executing tasks based on dependencies
    await this.executeGraph(taskGraph);

    this.logger.log(`Flow execution completed for: ${flow.name}`);
  }

  buildGraph(tasks) {
    const graph = {};
    tasks.forEach(task => {
      graph[task.id] = task.dependencies;
    });
    return graph;
  }

  async executeGraph(graph) {
    const executed = new Set();

    const executeTaskById = async (taskId) => {
      const task = sampleFlow.tasks.find(t => t.id === taskId);
      if (task) {
        await this.executeTask(task);
        executed.add(taskId);
      }
    };

    const canExecute = (taskId) => {
      const dependencies = graph[taskId];
      return dependencies.every(depId => executed.has(depId));
    };

    let pendingTasks = Object.keys(graph);
    while (pendingTasks.length > 0) {
      let executedAny = false;

      for (const taskId of pendingTasks) {
        if (canExecute(taskId) && !executed.has(taskId)) {
          await executeTaskById(taskId);
          executedAny = true;
        }
      }

      pendingTasks = pendingTasks.filter(taskId => !executed.has(taskId));

      if (!executedAny && pendingTasks.length > 0) {
        throw new Error('Circular dependency detected or a task dependency is missing');
      }
    }
  }

  private async executeTask(task: { id: string; name: string; dependencies?: string[] }): Promise<void> {
    this.logger.log(`Executing task: ${task.name}`);
    // Here goes the logic to execute the task
    this.logger.log(`Task executed: ${task.name}`);
  }
}
