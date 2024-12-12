'use strict';

var obsidian = require('obsidian');

class TaskFlowPlugin extends obsidian.Plugin {
	async onload() {
		this.addCommand({
			id: 'sort-selected-tasks',
			name: 'Sort selected tasks',
			editorCallback: (editor) => this.formatSelection(editor)
		});
	}

	formatSelection(editor) {
		const selection = editor.getSelection();
		if (selection) {
			const lines = selection.split('\n');
			const sortedLines = this.sortLines(lines);
			const result = sortedLines.join('\n');

			const { anchor, head } = editor.listSelections()[0];
			const from = editor.offsetToPos(Math.min(editor.posToOffset(anchor), editor.posToOffset(head)));
			const to = editor.offsetToPos(Math.max(editor.posToOffset(anchor), editor.posToOffset(head)));

			editor.replaceRange(result, from, to);
		} else {
			new obsidian.Notice('Please select a tasks list before sorting.');
		}
	}

	sortLines(lines) {
		const result = [];
		const completedTasks = [];

		lines.forEach(line => {
			if (line.trim().startsWith('- [x]')) {
				completedTasks.push(line);
			} else {
				result.push(line);
			}
		});

		return [...result, ...completedTasks];
	}
}

module.exports = TaskFlowPlugin;
