import cms from './core';
import { GitHubBackend } from './backend/github';
import { GitGatewayBackend } from './backend/git-gateway';
import { TestBackend } from './backend/test';

const { registerBackend } = cms;

registerBackend('git-gateway', GitGatewayBackend);
registerBackend('github', GitHubBackend);
registerBackend('test-repo', TestBackend);
