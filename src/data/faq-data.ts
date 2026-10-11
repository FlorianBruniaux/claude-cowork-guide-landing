import type { Lang } from './i18n'

type FaqItem = { question: string; answerHtml: string }
type FaqSection = { title: string; items: FaqItem[] }

const sources = {
  access: 'https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork',
  surfaces: 'https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile',
  architecture: 'https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview',
  computerUse: 'https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork',
  pricing: 'https://claude.com/pricing',
}

export const FAQ_UPDATED = '2026-10-11'

export const faqByLang: Record<Lang, FaqSection[]> = {
  en: [
    { title: 'Access and surfaces', items: [
      { question: 'What is Claude Cowork?', answerHtml: `Since September 16, 2026, Cowork is built into Claude itself ("Unified Claude", rolling out to Pro and Max on web, desktop and mobile): you no longer pick a Chat or Cowork mode, and Claude decides whether a request is a quick answer or a multi-step task. It can work with files, create documents, use connectors, and run code in an isolated environment. The exact capabilities depend on the surface and the plan. <a href="${sources.access}">Check Anthropic's current access guide</a>.` },
      { question: 'Where can I use Cowork?', answerHtml: `Claude Desktop supports macOS (13 Ventura or later), Windows, and Linux in beta (Ubuntu 22.04+ or Debian 12+, with no computer use and no dictation). Cowork is also available on web and mobile for eligible plans, with surface-specific capabilities. <a href="${sources.surfaces}">Compare the supported surfaces</a>.` },
      { question: 'Can Cowork execute code?', answerHtml: `Yes. Since October 6, 2026, new Cowork tasks on Pro and Max run in the cloud, in a temporary isolated environment on Anthropic's servers, and the "Only on your computer" option was removed. Your folders stay on your computer: a cloud session reaches only the folders you connect, and only while Claude Desktop is open. Files it reads are processed on Anthropic's servers. Cowork in the cloud is in beta on Team (on by default) and Enterprise (off by default, an owner turns it on). This does not mean Cowork has unrestricted access to your computer. <a href="${sources.architecture}">Read the architecture overview</a>.` },
      { question: 'Can Cowork use local files and cloud services?', answerHtml: `Cowork supports connectors, including Google Docs, Sheets and Slides (beta) and Salesforce (beta, approved organizations). Connected folders, the built-in browser and computer use depend on Claude Desktop being open and on a supported operating system. Treat each surface as a distinct capability set. <a href="${sources.surfaces}">See Anthropic's surface matrix</a>.` },
    ] },
    { title: 'Plans, limits, and safety', items: [
      { question: 'Is Claude Cowork free?', answerHtml: `No. Anthropic documents Cowork for paid Claude plans: Pro, Max, Team, and Enterprise, not Free, with availability varying by surface. On <a href="${sources.pricing}">claude.com/pricing</a> (checked October 11, 2026, in US dollars, excluding tax), Pro is $20 per month ($17 per month billed yearly), Max starts at $100 per month, and Team Standard is $20 per seat per month billed yearly. No euro price list is published. This independent guide and its prompt library are free and open source. <a href="${sources.access}">Verify current plan access</a>.` },
      { question: 'What are the usage limits?', answerHtml: `Limits depend on the Claude plan, task, model, and amount of content processed. Paid plans have a rolling 5-hour limit plus weekly limits, and Pro and Max can add usage credits at API rates. Auto approval mode uses more of your limit. This guide does not publish fixed message counts or reset estimates because those values can change. Check the limits shown in your Claude account and Anthropic's current help pages.` },
      { question: 'Is Cowork secure?', answerHtml: `Cowork uses isolation and permission controls, but agentic work still requires review. Approval modes were renamed: Manual (formerly "Ask before acting") waits for your Allow or Deny, Auto filters each action and blocks dangerous ones, and Skip all approvals (formerly "Act without asking") filters nothing. Limit access to the files needed for the task, keep credentials out of shared folders, and treat untrusted files and web content as potential prompt-injection sources. <a href="${sources.architecture}">Review the documented architecture</a>.` },
      { question: 'What is computer use in Cowork?', answerHtml: `Computer use lets Cowork interact with desktop applications. Anthropic now describes it as a beta for Pro and Max on macOS (14 or later) and Windows, not available on Team, Enterprise or Linux, with explicit risks and limitations. <a href="${sources.computerUse}">Read the official computer-use guidance</a>.` },
    ] },
    { title: 'About this guide', items: [
      { question: 'Is this guide official?', answerHtml: `No. This is a community-maintained guide and is not affiliated with Anthropic. Product claims are checked against Anthropic's documentation, with the verification date shown on this page.` },
      { question: 'Can I contribute?', answerHtml: `Yes. Report factual drift or propose improvements in the <a href="https://github.com/FlorianBruniaux/claude-cowork-guide">open-source guide repository</a>.` },
    ] },
  ],
  fr: [
    { title: 'Accès et surfaces', items: [
      { question: 'Qu’est-ce que Claude Cowork ?', answerHtml: `Depuis le 16 septembre 2026, Cowork est intégré à Claude lui-même (« Unified Claude », déploiement progressif pour Pro et Max sur le web, le desktop et le mobile) : plus de choix entre un mode Chat et un mode Cowork, Claude décide s'il s'agit d'une réponse rapide ou d'une tâche en plusieurs étapes. Il peut traiter des fichiers, créer des documents, utiliser des connecteurs et exécuter du code dans un environnement isolé. Les capacités exactes dépendent de la surface et du plan. <a href="${sources.access}">Consulter le guide d'accès Anthropic</a>.` },
      { question: 'Où puis-je utiliser Cowork ?', answerHtml: `Claude Desktop prend en charge macOS (13 Ventura ou plus récent), Windows et Linux en bêta (Ubuntu 22.04+ ou Debian 12+, sans contrôle de l'ordinateur ni dictée). Cowork est aussi proposé sur le web et le mobile pour les plans éligibles, avec des capacités propres à chaque surface. <a href="${sources.surfaces}">Comparer les surfaces prises en charge</a>.` },
      { question: 'Cowork peut-il exécuter du code ?', answerHtml: `Oui. Depuis le 6 octobre 2026, les nouvelles tâches Cowork des plans Pro et Max s'exécutent dans le cloud, dans un environnement isolé et temporaire sur les serveurs d'Anthropic, et l'option « Only on your computer » a été supprimée. Vos dossiers restent sur votre ordinateur : une session cloud n'atteint que les dossiers que vous connectez, et seulement quand Claude Desktop est ouvert. Les fichiers lus sont traités sur les serveurs d'Anthropic. Cowork dans le cloud est en bêta sur Team (activé par défaut) et Enterprise (désactivé par défaut, un owner l'active). Cela ne signifie pas que Cowork dispose d'un accès illimité à votre ordinateur. <a href="${sources.architecture}">Lire la présentation de l'architecture</a>.` },
      { question: 'Cowork peut-il utiliser des fichiers locaux et des services cloud ?', answerHtml: `Cowork prend en charge des connecteurs, dont Google Docs, Sheets et Slides (bêta) et Salesforce (bêta, organisations approuvées). Les dossiers connectés, le navigateur intégré et le contrôle de l'ordinateur dépendent de Claude Desktop ouvert et d'un système pris en charge. Chaque surface possède donc son propre périmètre. <a href="${sources.surfaces}">Voir la matrice Anthropic</a>.` },
    ] },
    { title: 'Plans, limites et sécurité', items: [
      { question: 'Claude Cowork est-il gratuit ?', answerHtml: `Non. Anthropic documente Cowork pour les plans Claude payants : Pro, Max, Team et Enterprise, pas Free, avec une disponibilité variable selon la surface. Sur <a href="${sources.pricing}">claude.com/pricing</a> (relevé le 11 octobre 2026, en dollars, hors taxes), Pro coûte 20 $ par mois (17 $ par mois en facturation annuelle), Max démarre à 100 $ par mois et Team Standard coûte 20 $ par siège et par mois en annuel. Aucun tarif en euros n'est publié. Ce guide indépendant et sa bibliothèque de prompts sont gratuits et open source. <a href="${sources.access}">Vérifier les conditions d'accès actuelles</a>.` },
      { question: 'Quelles sont les limites d’utilisation ?', answerHtml: `Les limites dépendent du plan Claude, de la tâche, du modèle et du volume de contenu traité. Les plans payants ont une limite glissante de 5 heures et des limites hebdomadaires ; Pro et Max peuvent ajouter des crédits d'usage aux tarifs API. Le mode Auto consomme davantage de limite. Ce guide ne publie pas de nombre fixe de messages ou d'estimation de réinitialisation, car ces valeurs peuvent évoluer. Consultez les limites affichées dans votre compte Claude et l'aide Anthropic.` },
      { question: 'Cowork est-il sécurisé ?', answerHtml: `Cowork utilise des mécanismes d'isolation et de permission, mais le travail agentique exige toujours une revue. Les modes d'approbation ont été renommés : Manual (ex « Ask before acting ») attend votre Allow ou Deny, Auto filtre chaque action et bloque les actions dangereuses, Skip all approvals (ex « Act without asking ») ne filtre rien. Limitez l'accès aux fichiers nécessaires, excluez les identifiants des dossiers partagés et traitez les fichiers ou pages non fiables comme des sources possibles d'injection de prompt. <a href="${sources.architecture}">Consulter l'architecture documentée</a>.` },
      { question: 'Qu’est-ce que le contrôle de l’ordinateur dans Cowork ?', answerHtml: `Le contrôle de l'ordinateur permet à Cowork d'interagir avec des applications desktop. Anthropic le décrit désormais comme une bêta pour Pro et Max sur macOS (14 ou plus récent) et Windows, indisponible sur Team, Enterprise et Linux, avec des risques et limites explicites. <a href="${sources.computerUse}">Lire les consignes officielles</a>.` },
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
