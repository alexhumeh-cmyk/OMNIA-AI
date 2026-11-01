import { agentCatalog, compareRows, frameworkCatalog, knowledgeTopics, savedCollections, topMetrics, workflowTemplates } from '@/lib/data';

export function getFeaturedAgents() {
  return agentCatalog.slice(0, 5);
}

export function getAgentCategories() {
  return Array.from(new Set(agentCatalog.map((item) => item.category)));
}

export function getFrameworkCategories() {
  return Array.from(new Set(frameworkCatalog.map((item) => item.category)));
}

export function getComparisonRows() {
  return compareRows;
}

export function getKnowledgeTopics() {
  return knowledgeTopics;
}

export function getMetrics() {
  return topMetrics;
}

export function getCollections() {
  return savedCollections;
}

export function getWorkflowTemplates() {
  return workflowTemplates;
}
