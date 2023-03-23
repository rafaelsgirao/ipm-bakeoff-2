{ pkgs }: {
  deps = [
    pkgs.vim
    pkgs.gitui
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}