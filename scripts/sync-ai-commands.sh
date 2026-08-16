#!/usr/bin/env bash
# Sincroniza os comandos de IA a partir da fonte canônica (.claude/commands/)
# para os formatos das outras CLIs:
#   - GitHub Copilot: .github/prompts/<nome>.prompt.md  (uso: /<nome> no chat)
#   - Codex CLI:      ~/.codex/prompts/<nome>.md        (prompts são globais no Codex;
#                     prefixados com o nome do projeto para evitar colisão)
#
# Uso: ./scripts/sync-ai-commands.sh [--with-codex]

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$REPO_ROOT/.claude/commands"
COPILOT_DST="$REPO_ROOT/.github/prompts"
CODEX_DST="$HOME/.codex/prompts"
PROJECT_PREFIX="dmds"

[ -d "$SRC" ] || { echo "erro: $SRC não existe"; exit 1; }

mkdir -p "$COPILOT_DST"
for f in "$SRC"/*.md; do
    name="$(basename "$f" .md)"
    {
        echo "<!-- GERADO por scripts/sync-ai-commands.sh a partir de .claude/commands/$name.md — edite lá e re-rode o script -->"
        # Copilot usa ${input} em vez de $ARGUMENTS
        sed 's/\$ARGUMENTS/${input}/g' "$f"
    } > "$COPILOT_DST/$name.prompt.md"
    echo "copilot: $name.prompt.md"
done

if [ "${1:-}" = "--with-codex" ]; then
    mkdir -p "$CODEX_DST"
    for f in "$SRC"/*.md; do
        name="$(basename "$f" .md)"
        # Codex lê o corpo direto; $ARGUMENTS é suportado nos prompts do Codex
        cp "$f" "$CODEX_DST/$PROJECT_PREFIX-$name.md"
        echo "codex:   $PROJECT_PREFIX-$name.md (global em ~/.codex/prompts)"
    done
fi

echo "ok."
