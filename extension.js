import * as vscode from 'vscode';

export function activate(context) {
  console.log('Congratulations, your extension "simple-plugin" is now active!');

  // Register a command with the extension
  let disposable = vscode.commands.registerCommand('simple-plugin.sayHello', () => {
    vscode.window.showInformationMessage('Hello from Simple Plugin!');
  });

  // Add the command to the extension context
  context.subscriptions.push(disposable);
}

export function deactivate() {}