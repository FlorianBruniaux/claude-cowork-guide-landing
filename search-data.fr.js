/**
 * Données de Recherche - FAQ et Règles d'Or
 * Pour la recherche du Guide Claude Cowork
 */

window.SEARCH_FAQ_FR = [
    {
        id: 'faq-1',
        type: 'faq',
        title: 'Qu\'est-ce que Claude Cowork ?',
        content: 'Claude Cowork est un assistant IA qui peut interagir avec vos applications Mac pour automatiser des tâches comme l\'organisation de fichiers, la création de documents et l\'extraction de données.',
        url: '#faq'
    },
    {
        id: 'faq-2',
        type: 'faq',
        title: 'Cowork est-il gratuit ?',
        content: 'Non, Cowork nécessite un abonnement Claude Pro (20$/mois) ou Max (100$/mois). Il n\'est pas disponible sur la formule gratuite.',
        url: '#faq'
    },
    {
        id: 'faq-3',
        type: 'faq',
        title: 'Cowork fonctionne-t-il sur Windows ?',
        content: 'Actuellement, Cowork n\'est disponible que sur macOS. Il n\'y a pas de calendrier annoncé pour le support Windows.',
        url: '#faq'
    },
    {
        id: 'faq-4',
        type: 'faq',
        title: 'Quelles applications Cowork peut-il contrôler ?',
        content: 'Cowork peut contrôler le Finder pour les opérations sur fichiers, créer des documents, lire des PDF et images, accéder aux navigateurs web pour la recherche, et plus encore.',
        url: '#faq'
    },
    {
        id: 'faq-5',
        type: 'faq',
        title: 'Mes données sont-elles sécurisées avec Cowork ?',
        content: 'Cowork nécessite une permission explicite pour chaque action. Créez un dossier de travail dédié, ne partagez jamais vos identifiants, et revoyez toujours les plans avant d\'approuver.',
        url: '#faq'
    },
    {
        id: 'faq-6',
        type: 'faq',
        title: 'Quelles sont les limites de tokens ?',
        content: 'La formule Pro a environ 30M de tokens par fenêtre de 5 heures. La formule Max a des limites plus élevées. Les opérations sur fichiers volumineux consomment rapidement des tokens.',
        url: '#faq'
    },
    {
        id: 'faq-7',
        type: 'faq',
        title: 'Puis-je annuler des actions dans Cowork ?',
        content: 'Les déplacements de fichiers peuvent être suivis via les rapports. Pour la réversibilité, travaillez toujours dans un espace de travail dédié et demandez des rapports des modifications effectuées.',
        url: '#faq'
    },
    {
        id: 'faq-8',
        type: 'faq',
        title: 'Pourquoi ma tâche a-t-elle échoué en cours de route ?',
        content: 'Causes courantes : limite de tokens atteinte, permission refusée, fichier verrouillé, ou timeout réseau. Consultez le guide de dépannage pour les erreurs spécifiques.',
        url: '#faq'
    },
    {
        id: 'faq-9',
        type: 'faq',
        title: 'Comment reprendre une tâche interrompue ?',
        content: 'Utilisez les points de contrôle et les rapports de progression. Si une tâche a été interrompue, référez-vous au dernier rapport pour voir ce qui a été complété et reprendre à partir de là.',
        url: '#faq'
    },
    {
        id: 'faq-10',
        type: 'faq',
        title: 'Différence entre Cowork et Claude Code ?',
        content: 'Cowork est pour les travailleurs du savoir qui automatisent des tâches bureautiques. Claude Code est pour les développeurs qui écrivent et modifient du code dans le terminal.',
        url: '#comparison'
    }
];

window.SEARCH_RULES_FR = [
    {
        id: 'rule-1',
        type: 'rule',
        title: 'Toujours vérifier le plan avant d\'approuver',
        content: 'Ne jamais approuver aveuglément. Lisez ce que Cowork prévoit de faire, vérifiez les chemins de fichiers, confirmez que les actions correspondent à vos attentes.',
        url: '#golden-rules'
    },
    {
        id: 'rule-2',
        type: 'rule',
        title: 'Utiliser un dossier de travail dédié',
        content: 'Créez ~/Cowork-Workspace avec des sous-dossiers input/ et output/. Ne laissez jamais Cowork accéder à l\'intégralité de votre répertoire personnel.',
        url: '#golden-rules'
    },
    {
        id: 'rule-3',
        type: 'rule',
        title: 'Ne jamais partager d\'identifiants ou mots de passe',
        content: 'Ne collez pas de mots de passe, clés API, tokens ou tout identifiant dans Cowork. Il n\'en a pas besoin pour les opérations sur fichiers.',
        url: '#golden-rules'
    },
    {
        id: 'rule-4',
        type: 'rule',
        title: 'Demander des rapports pour chaque opération',
        content: 'Demandez toujours un rapport récapitulatif montrant ce qui a été fait. Cela crée une piste d\'audit et aide à la récupération si nécessaire.',
        url: '#golden-rules'
    },
    {
        id: 'rule-5',
        type: 'rule',
        title: 'Commencer petit, monter en charge graduellement',
        content: 'Testez avec quelques fichiers avant d\'en traiter des centaines. Vérifiez les résultats avant de lancer de grandes opérations par lot.',
        url: '#golden-rules'
    },
    {
        id: 'rule-6',
        type: 'rule',
        title: 'Conserver des sauvegardes des fichiers importants',
        content: 'Avant les opérations majeures, assurez-vous d\'avoir des sauvegardes. Cowork peut faire des erreurs, et les opérations sur fichiers peuvent être irréversibles.',
        url: '#golden-rules'
    },
    {
        id: 'rule-7',
        type: 'rule',
        title: 'Surveiller l\'utilisation des tokens pour les grandes tâches',
        content: 'Les opérations sur fichiers volumineux consomment rapidement des tokens. Planifiez les lots en conséquence et utilisez des points de contrôle pour la reprise.',
        url: '#golden-rules'
    }
];
