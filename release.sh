#!/bin/bash

# Recommended usage to save time during many iterations:
# 1. If on windows, start a git bash
# 2. eval `ssh-agent -s`
# 3. ssh-add ~/.ssh/id_rsa
# 4. Enter your passphrase (will be stored until restart)
# 5. ./release.sh patch
# SSH agent shortcut thanks to https://stackoverflow.com/a/17848593

set -eoux

part=${1?:Specify part (patch, minor, major)}

read -r -p "Are you sure? Press [Enter] key to continue..."

echo 'Get new version' 
echo 'If you get an error, install (and restart the terminal): pip install bump2version'
# src: https://pypi.org/project/bump2version/
new_vers=$(bump2version --dry-run --list "$part" | grep new_version | sed -r s,"^.*=",,)
new_vers_str="v$new_vers"
# shellcheck disable=SC2034  # Unused variables left for readability
new_branch="build-$new_vers_str"
# The sources are marked with a tag
echo 'Bump version & push, including tags'
bump2version "$part"
git push --follow-tags

# Update: only pushing tags now
# echo "You might be asked multiple times for the ssh key, even in a GUI OpenSSH window. Proceed each time"
# echo "You might be asked multiple times for the ssh key, even in a GUI OpenSSH window. Proceed each time"

# # This is only needed once, but it's good to keep in case this script will only execute once
# git config 'lfs.https://github.com/pizzaserved/mjapi.io/info/lfs.locksverify' false
# git config 'lfs.git@github.com:pizzaserved/mjapi.io/info/lfs.locksverify' false

# # Proably this is the only one needed
# # https://github.com/git-lfs/git-lfs/issues/2269#issuecomment-304299990
# git config lfs.https://github.com.locksverify false

# # NOTE: THIS ONLY WORKS ON BASH! FOR SOME REASON, RUNNING THIS COMMAND MANUALLY IN PS (and probably cmd) FAILS WITH: error: failed to push some refs to 'github.com:xucian/com.thefallengames.needle.git
# echo "Push to the $new_branch branch via git subtree magic"
# # # Pushing directly to a branch, no intermediary steps! 
# # # Thanks https://github.com/IvanMurzak/Unity-Package-Template/blob/master/gitSubTreePushToUPM.bat
# # git subtree push --prefix dist/mjapi origin "$new_branch"

# # Update: this actually creates the branch. Note that the build branch is not tagged as its name already implies its version. The tag is for the sources
# git subtree split --prefix=dist/mjapi --squash -b "$new_branch"
# git push origin "$new_branch"

echo 'Done! Check GitHub Actions runs at https://github.com/pizzaserved/mjapi.io/actions'