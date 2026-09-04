import type { Lang } from './i18n'

type FaqItem = { question: string; answerHtml: string }
type FaqSection = { title: string; items: FaqItem[] }

const sources = {
  access: 'https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork',
  surfaces: 'https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile',
  architecture: 'https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview',
  computerUse: 'https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork',
}

export const FAQ_UPDATED = '2026-09-04'

export const faqByLang: Record<Lang, FaqSection[]> = {
  en: [
    { title: 'Access and surfaces', items: [
      { question: 'What is Claude Cowork?', answerHtml: `Cowork is Claude's agentic workspace for multi-step tasks. It can work with files, create documents, use connectors, and run code in an isolated environment. The exact capabilities depend on whether you use desktop, web, or mobile. <a href="${sources.access}">Check Anthropic's current access guide</a>.` },
      { question: 'Where can I use Cowork?', answerHtml: `Claude Desktop supports macOS and Windows, with Linux available in beta and some feature limitations. Cowork is also available in beta on web and mobile for eligible plans, with surface-specific capabilities. <a href="${sources.surfaces}">Compare the supported surfaces</a>.` },
      { question: 'Can Cowork execute code?', answerHtml: `Yes. Anthropic documents code execution in an isolated environment. This does not mean Cowork has unrestricted access to your host shell. Local execution and local file access use the connected desktop environment. <a href="${sources.architecture}">Read the architecture overview</a>.` },
      { question: 'Can Cowork use local files and cloud services?', answerHtml: `Cowork supports connectors, while local files and some browser or computer-use features depend on a connected desktop and supported operating system. Treat each surface as a distinct capability set. <a href="${sources.surfaces}">See Anthropic's surface matrix</a>.` },
    ] },
    { title: 'Plans, limits, and safety', items: [
      { question: 'Is Claude Cowork free?', answerHtml: `No. Anthropic currently documents Cowork for eligible paid Claude plans, including Pro, Max, Team, and Enterprise, with availability varying by surface. This independent guide and its prompt library are free and open source. <a href="${sources.access}">Verify current plan access</a>.` },
      { question: 'What are the usage limits?', answerHtml: `Limits depend on the Claude plan, task, model, and amount of content processed. This guide does not publish fixed message counts or reset estimates because those values can change. Check the limits shown in your Claude account and Anthropic's current help pages.` },
      { question: 'Is Cowork secure?', answerHtml: `Cowork uses isolation and permission controls, but agentic work still requires review. Limit access to the files needed for the task, keep credentials out of shared folders, and treat untrusted files and web content as potential prompt-injection sources. <a href="${sources.architecture}">Review the documented architecture</a>.` },
      { question: 'What is computer use in Cowork?', answerHtml: `Computer use lets Cowork interact with desktop applications. Anthropic currently describes it as a research preview for Pro and Max on macOS and Windows, with explicit risks and limitations. <a href="${sources.computerUse}">Read the official computer-use guidance</a>.` },
    ] },
    { title: 'About this guide', items: [
      { question: 'Is this guide official?', answerHtml: `No. This is a community-maintained guide and is not affiliated with Anthropic. Product claims are checked against Anthropic's documentation, with the verification date shown on this page.` },
      { question: 'Can I contribute?', answerHtml: `Yes. Report factual drift or propose improvements in the <a href="https://github.com/FlorianBruniaux/claude-cowork-guide">open-source guide repository</a>.` },
    ] },
  ],
  fr: [
    { title: 'Accès et surfaces', items: [
      { question: 'Qu’est-ce que Claude Cowork ?', answerHtml: `Cowork est l'espace de travail agentique de Claude pour les tâches en plusieurs étapes. Il peut traiter des fichiers, créer des documents, utiliser des connecteurs et exécuter du code dans un environnement isolé. Les capacités exactes dépendent de la surface utilisée. <a href="${sources.access}">Consulter le guide d'accès Anthropic</a>.` },
      { question: 'Où puis-je utiliser Cowork ?', answerHtml: `Claude Desktop prend en charge macOS et Windows. Linux est disponible en beta avec certaines limites fonctionnelles. Cowork est aussi proposé en beta sur le web et mobile pour les plans éligibles, avec des capacités propres à chaque surface. <a href="${sources.surfaces}">Comparer les surfaces prises en charge</a>.` },
      { question: 'Cowork peut-il exécuter du code ?', answerHtml: `Oui. Anthropic documente l'exécution de code dans un environnement isolé. Cela ne signifie pas que Cowork dispose d'un accès illimité au shell de la machine hôte. L'exécution locale et l'accès aux fichiers locaux passent par l'environnement desktop connecté. <a href="${sources.architecture}">Lire la présentation de l'architecture</a>.` },
      { question: 'Cowork peut-il utiliser des fichiers locaux et des services cloud ?', answerHtml: `Cowork prend en charge des connecteurs. Les fichiers locaux et certaines fonctions de navigateur ou de contrôle de l'ordinateur dépendent d'un desktop connecté et du système pris en charge. Chaque surface possède donc son propre périmètre. <a href="${sources.surfaces}">Voir la matrice Anthropic</a>.` },
    ] },
    { title: 'Plans, limites et sécurité', items: [
      { question: 'Claude Cowork est-il gratuit ?', answerHtml: `Non. Anthropic documente actuellement Cowork pour des plans Claude payants éligibles, notamment Pro, Max, Team et Enterprise, avec une disponibilité variable selon la surface. Ce guide indépendant et sa bibliothèque de prompts sont gratuits et open source. <a href="${sources.access}">Vérifier les conditions d'accès actuelles</a>.` },
      { question: 'Quelles sont les limites d’utilisation ?', answerHtml: `Les limites dépendent du plan Claude, de la tâche, du modèle et du volume de contenu traité. Ce guide ne publie pas de nombre fixe de messages ou d'estimation de réinitialisation, car ces valeurs peuvent évoluer. Consultez les limites affichées dans votre compte Claude et l'aide Anthropic.` },
      { question: 'Cowork est-il sécurisé ?', answerHtml: `Cowork utilise des mécanismes d'isolation et de permission, mais le travail agentique exige toujours une revue. Limitez l'accès aux fichiers nécessaires, excluez les identifiants des dossiers partagés et traitez les fichiers ou pages non fiables comme des sources possibles d'injection de prompt. <a href="${sources.architecture}">Consulter l'architecture documentée</a>.` },
      { question: 'Qu’est-ce que le contrôle de l’ordinateur dans Cowork ?', answerHtml: `Le contrôle de l'ordinateur permet à Cowork d'interagir avec des applications desktop. Anthropic le décrit actuellement comme une research preview pour Pro et Max sur macOS et Windows, avec des risques et limites explicites. <a href="${sources.computerUse}">Lire les consignes officielles</a>.` },
    ] },
    { title: 'À propos de ce guide', items: [
      { question: 'Ce guide est-il officiel ?', answerHtml: `Non. Ce guide est maintenu par la communauté et n'est pas affilié à Anthropic. Les affirmations produit sont comparées à la documentation Anthropic, avec la date de vérification indiquée sur cette page.` },
      { question: 'Puis-je contribuer ?', answerHtml: `Oui. Signalez une information obsolète ou proposez une amélioration dans le <a href="https://github.com/FlorianBruniaux/claude-cowork-guide">dépôt open source du guide</a>.` },
    ] },
  ],
}

export function answerText(answerHtml: string) {
  return answerHtml.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()
}
