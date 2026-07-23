# Git HOL 4 – Resolving Merge Conflicts

## 1. Objective

The objective of this exercise was to understand how to resolve a merge conflict that happens when multiple people update the same file in different ways — one on the master branch and another in a separate branch.

## 2. Overview

In this exercise, I intentionally created a conflict by modifying the same file, `hello.xml`, differently on both a new branch and on master. When I tried to merge the branch into master, Git flagged a conflict, which I then resolved using the P4Merge 3-way merge tool.

## 3. Tools and Technologies Used

* Git
* Git Bash
* P4Merge (3-way merge tool)

## 4. Prerequisites

* Completion of the previous hands-on lab, "Git-T03-HOL_001"
* Git environment already configured

## 5. Steps Performed

1. Verified that the master branch was clean with no pending changes.
2. Created a new branch called `GitWork` and added a file `hello.xml` to it.
3. Updated the content of `hello.xml` inside the branch and checked the status.
4. Committed these changes to the `GitWork` branch.
5. Switched back to the master branch.
6. Added a file with the same name, `hello.xml`, to master but with different content.
7. Committed this change to master.
8. Viewed the commit history using a graph view to see how the branches had diverged.
9. Checked the differences between master and the branch using `git diff`.
10. Used the P4Merge tool for a clearer, visual comparison of the differences.
11. Attempted to merge the `GitWork` branch into master, which resulted in a conflict.
12. Reviewed the conflict markers that Git added to the file.
13. Used the 3-way merge tool in P4Merge to resolve the conflict.
14. Committed the resolved file to master.
15. Checked the final status and added any backup files created during the merge to `.gitignore`.

## 6. Git Commands Used

```bash
git status
```
Used at the start to confirm master had no uncommitted changes before beginning the exercise.

```bash
git branch GitWork
git checkout GitWork
```
These create a new branch named `GitWork` and switch to it.

```bash
git add hello.xml
git commit -m "Updated hello.xml in GitWork branch"
```
These stage and commit the changes made to `hello.xml` inside the `GitWork` branch.

```bash
git checkout master
```
Switches back to the master branch.

```bash
git add hello.xml
git commit -m "Updated hello.xml in master with different content"
```
These stage and commit a different version of `hello.xml` directly on master.

```bash
git log --oneline --graph --decorate --all
```
This shows a compact, graphical view of the commit history across all branches, so I could see exactly where master and `GitWork` had diverged.

```bash
git diff master GitWork
```
This compares the two versions of `hello.xml` directly in the terminal.

```bash
git difftool master GitWork
```
This opens P4Merge to show the same comparison visually.

```bash
git merge GitWork
```
This attempts to merge the `GitWork` branch into master. Since both branches modified the same lines in `hello.xml`, Git was not able to merge automatically and marked the file as conflicted.

```bash
git mergetool
```
This opens the configured merge tool (P4Merge) in 3-way merge mode, showing the base version, master's version, and the branch's version side by side so the conflict can be resolved manually.

```bash
git add hello.xml
git commit -m "Resolved merge conflict in hello.xml"
```
Once the conflict was resolved in the merge tool, these commands stage the resolved file and complete the merge with a commit.

```bash
git status
```
Used at the end to check for any leftover backup files (like `hello.xml.orig`) created by the merge tool.

## 7. Implementation / Execution

I made sure master was clean before starting, then created the `GitWork` branch and modified `hello.xml` with some content, committing it to the branch. After that, I switched back to master and made a different change to the same file, `hello.xml`, and committed that too. At this point, both master and `GitWork` had different versions of the same file.

Using `git log --oneline --graph --decorate --all`, I could clearly see the two branches diverging from a common commit. I compared the differences both through the terminal and visually using P4Merge before attempting the merge.

When I ran `git merge GitWork` from master, Git could not automatically combine the two versions since they had conflicting changes in the same part of the file, so it marked `hello.xml` as conflicted and inserted conflict markers into it. I then used `git mergetool`, which opened P4Merge in 3-way merge mode. This let me see the base version, master's version, and the branch's version together, and choose which lines to keep. After resolving the conflict in the tool, I saved the file, staged it, and committed it to complete the merge.

## 8. Output / Result

After resolving the conflict and committing, master had a single, combined version of `hello.xml` containing the correct final content. Running `git status` afterward showed the branch was clean again, aside from a backup file created by the merge tool, which I added to `.gitignore`.

[Add Screenshot of the Final Output Here]

## 9. Key Learning

* Understood why and how merge conflicts happen when the same lines are changed differently on two branches.
* Learned how to read conflict markers that Git inserts into a file.
* Learned how to use a 3-way merge tool (P4Merge) to resolve conflicts more easily than editing markers manually.
* Understood the importance of committing the resolved file to complete the merge.
* Learned to keep the working directory clean by ignoring backup files generated during conflict resolution.

## 10. Conclusion

This exercise gave me hands-on experience with one of the trickier parts of Git — resolving conflicts. I now understand why conflicts happen and feel more confident handling them using a merge tool instead of panicking when I see conflict markers in a file. The exercise was completed successfully.

## GitHub Repository

**Repository:** CTS-DeepSkilling

**Repository URL:** https://github.com/Ashwin-2006-t/CTS-DeepSkilling.git

**Folder/Path:** D:\ASHWIN\Ashwin Programing\JAVA Spring Boot\intelij idea\CTS-Deepskilling\Week6\GIT\4. Git-HOL
