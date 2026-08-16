# ADR-0008: Infraestrutura de contexto para agentes de IA versionada no repositório

- **Status:** aceito
- **Data:** 2026-08-16
- **Decisor:** Douglas Matos da Silva

## Contexto

O desenvolvimento do site passa a ser feito com múltiplas CLIs de IA (Claude Code, Codex CLI, GitHub Copilot). Cada ferramenta lê arquivos de instrução diferentes, e sem contexto persistente cada sessão re-descobre o projeto do zero, repete erros já cometidos e perde o fio de tarefas interrompidas. O autor já usa esse padrão (AGENTS.md canônico + comandos portáveis + memória/lessons) com sucesso em outro repositório pessoal.

## Decisão

Versionamos no próprio repositório uma infraestrutura de contexto multi-CLI:

- **`AGENTS.md` (raiz) é o arquivo canônico de instruções.** `CLAUDE.md` o importa (`@AGENTS.md`); `.github/copilot-instructions.md` aponta para ele; o Codex CLI o lê nativamente.
- **`.ai/`** concentra o contexto vivo: `context.md`, `devloop.md`, `memory/` (fatos duráveis indexados por `MEMORY.md`), `lessons/LESSONS.md` (append-only) e `handoff/` (passagem de bastão entre sessões/agentes com template e status).
- **Comandos portáveis:** fonte canônica em `.claude/commands/*.md`; `scripts/sync-ai-commands.sh` gera os espelhos `.github/prompts/*.prompt.md` (Copilot) e, opcionalmente, `~/.codex/prompts/` (Codex).
- **Governança de docs:** decisão de arquitetura ⇒ ADR; feature ⇒ spec antes do código (SDD).

## Alternativas consideradas

- **Um arquivo de instrução por ferramenta, independentes** — descartado: divergem em semanas.
- **Contexto só na memória da ferramenta (ex.: memória do Claude Code fora do repo)** — descartado: não é portável entre CLIs nem entre máquinas, e não é revisável em PR.
- **Symlinks entre arquivos de instrução** — descartado: suporte inconsistente entre ferramentas/SOs; o import explícito e o script de sync são mais previsíveis.

## Consequências

**Positivas:**
- Qualquer CLI entra com o mesmo contexto; handoffs permitem trocar de ferramenta no meio de uma tarefa.
- Aprendizado acumula (memory/lessons) e é revisável no git.

**Negativas / riscos aceitos:**
- Custo de manutenção: memória/lessons desatualizadas são piores que ausentes — o protocolo em `.ai/README.md` exige atualização ao fim de cada tarefa relevante.
- Duplicação controlada dos comandos (mitigada pelo script de sync; os espelhos carregam aviso de "gerado").
- O repositório é público: nada de dados sensíveis em `.ai/` (regras em `.ai/memory/posicionamento-marca.md`).
