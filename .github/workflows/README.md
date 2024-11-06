# Docker Pipeline com GitHub Actions

Este projeto utiliza Docker e GitHub Actions para automatizar o build, teste e deploy de uma aplicação web composta por três componentes: Front-End (React), Back-End (Node.js e Express) e Banco de Dados (PostgreSQL). Cada componente é empacotado em uma imagem Docker independente, o que permite facilidade de configuração e escalabilidade.

Os workflows de GitHub Actions são configurados para:
1. Construir e testar as imagens Docker a cada push ou pull request na branch principal.
2. Publicar as imagens no Docker Hub se os testes forem bem-sucedidos.
3. Simular o deploy em um ambiente de produção.

As credenciais do Docker Hub são armazenadas com segurança nos GitHub Secrets.
