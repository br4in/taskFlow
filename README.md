TaskFlow is an Obsidian plugin that allows you to easily sort your markdown tasks within a selected area. It moves completed tasks to the bottom, and preserves the position of incomplete tasks and any lines that's not a markdown task.

## Usage

1. Select the tasks list you want to sort in your note.
2. Open the command palette (Ctrl/Cmd + P) and search for "Sort Selected Tasks"

## Customisation

You can customise the hotkey for the command:

1. Go to Settings > Hotkeys
2. Search for "TaskFlow: Sort selected tasks"
3. Click on the plus icon to add a new hotkey

## Example

Before sorting:
```
- [ ] Incomplete task
- [x] Completed task
A non-task line
- [ ] Incomplete task
- [x] Completed task
- [ ] Incomplete task
- [x] Completed task
- [ ] Incomplete task
Another non-task line
- [x] Completed task
```

After sorting:
```
- [ ] Incomplete task
A non-task line
- [ ] Incomplete task
- [ ] Incomplete task
- [ ] Incomplete task
Another non-task line
- [x] Completed task
- [x] Completed task
- [x] Completed task
- [x] Completed task
```

## Support

If you encounter any issues or have suggestions for improvements, please file an issue on the GitHub repository.