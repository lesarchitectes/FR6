window.addEventListener('load', function () {
    preparer();
    document.getElementById('corriger').addEventListener('click', corriger);
});

function preparer() {
    var nombre = 10;
    var lignes = tsv.split('¶'),
        mots,
        definitions = {},
        fragment = document.createDocumentFragment(),
        choisis = [],
        choisi,
        p,
        label,
        solution,
        input;
    
    document.innerHTML += tsv;
    for (var i = 0; i < lignes.length; i++) {
        lignes[i] = lignes[i].split('§');
        definitions[lignes[i][1]] = lignes[i][2];
    }
    
    mots = Object.keys(definitions);
    
    do {
        choisi = mots[Math.floor(Math.random() * mots.length)];
        if (choisis.indexOf(choisi) === -1) { choisis.push(choisi); }
    } while (choisis.length < nombre);
        
    for (var i = 0; i < nombre; i++) {
        p = document.createElement('p');
        p.style.marginLeft = '11em';
        p.style.textIndent = '-11em';
        label = document.createElement('label');
        label.textContent = definitions[choisis[i]];
        solution = document.createElement('label');
        solution.innerHTML = '<u>' + choisis[i] + '</u> : ';
        solution.style.display = 'none';
        input = document.createElement('input');
        input.type = 'text';
        input.style.width = '10em';
        input.style.marginRight = '1em';
        input.className = 'reponse';
        input.dataset.solution = choisis[i];
        p.appendChild(input);
        p.appendChild(solution);
        p.appendChild(label);
        fragment.appendChild(p);
    }
    
    document.getElementById('definitions').appendChild(fragment);
}

function créer() {
    var fragment = document.createDocumentFragment();
    
    
}

function corriger() {
    var reponses = document.getElementsByClassName('reponse'),
        i;
    
    for (i = 0; i < reponses.length; i++) {
        if (reponses[i].value === reponses[i].dataset.solution) {
            reponses[i].className = 'reponse correcte';
            reponses[i].nextElementSibling.style.display = 'none';
        } else {
            reponses[i].className = 'reponse incorrecte';
            reponses[i].nextElementSibling.style.display = 'inline';
        }
        reponses[i].setAttribute('disabled', 'disabled');
    }
    
    document.getElementById('corriger').setAttribute('disabled', 'disabled');
}

var tsv = '601§invective§injure proférée avec emportement§s¶601§sarcasme§trait mordant d’ironie, de raillerie cruelle§s¶601§acrimonie§aigreur qui est méchante, blessante§s¶601§imprécation§prière pour que s’abatte, sur l’ennemi, la colère des divinités infernales || (par extension) souhait de malheur adressé à quelqu’un§s¶601§polémique§débat passionné et violent§s¶601§controverse§débat argumenté sur une opinion ou un problème§s¶601§apologie§défense publique de quelqu’un ou de quelque chose§s¶601§faconde§grande facilité de parole§s¶601§injonction§ordre non discutable, souvent accompagné d’une menace de sanctions§s¶601§sentencieux§d’une gravité appuyée, d’une solennité excessive§s¶601§acerbe§désagréable, plein d’une âpreté mordante mais généralement passagère§s¶601§caustique§qui est cinglant, blessant dans la plaisanterie ou la satire§s¶601§proférer§exprimer (une opinion, un jugement), souvent avec véhémence ou violence§s¶601§vociférer§dire avec colère, en hurlant§s¶601§dénigrer§s’efforcer de détruire la réputation de qqn ou de qqc.§s¶601§rétorquer§répondre sous forme de riposte§s¶601§disserter§développer méthodiquement des arguments (sur un sujet, un thème, une question savante) || (par extension) … de façon pédante et ennuyeuse§s¶601§promulguer§publier officiellement (une loi, un décret)§s¶601§vilipender§(littéraire) traiter avec beaucoup de mépris§s¶601§notifier§informer quelqu’un expressément [–– qqc. à qqn]§s¶602§jugement§capacité de l’esprit à juger qqc. ou qqn à sa juste valeur, après avoir discerné ses mérites et ses défauts, ses qualités et ses imperfections || examen raisonné des œuvres d’art, conduit selon des critères variables, qui aboutit à un jugement de valeur§s¶602§pamphlet§court écrit satirique, souvent politique, au ton violent§s¶602§censure§contrôle exercé sur les publications et les discours publics (par un groupement idéologique, p. ex. un parti politique)§s¶602§exégèse§analyse interprétative d’un texte || (en particulier) –– d’un texte sacré§s¶602§réquisitoire§discours d’accusation ou de reproches que l’on développe contre qqn§s¶602§moraliste§personne qui observe la nature humaine, les mœurs, réfléchit sur elles, et en tire une morale§¶602§diatribe§discours dans lequel on attaque qqc., sur un ton violent et souvent injurieux§s¶602§détracteur§personne qui dénigre outrageusement, qui rabaisse les mérites, les qualités, la valeur de qqn ou de qqc.§s¶602§laudateur§celui qui loue, qui exprime une louange§s¶602§interprétation§fait de rendre compréhensible ce qui est dense, compliqué ou ambigu || fait de donner à une œuvre un sens personnel, éventuellement symbolique, parmi tous les sens possibles§¶603§existentialisme§philosophie qui affirme le primat de l’existence vécue, individuelle, irréductible à un concept, une définition, une essence§¶603§essentialisme§philosophie qui affirme le primat absolu de l’essence sur l’existence§¶603§providentialisme§doctrine d’après laquelle les actions des hommes sont, comme les phénomènes de la nature, soumises à un ensemble de causes extérieures || doctrine qui subordonne la volonté humaine à la Providence divine et nie donc le libre arbitre§¶603§prédétermination§doctrine selon laquelle Dieu a déterminé, de toute éternité, le destin de l’humanité et de l’univers§¶603§existence§le fait d’exister || (existentialisme) la réalité individuelle, actuelle, concrète§¶603§essence§ce qu’un être est || (existentialisme) l’être comme concept§¶603§liberté§état de celui qui n’est pas soumis à des contraintes externes || (politique) pouvoir que le citoyen a de faire ce qu’il veut sous la protection des lois et dans les limites de celles-ci§¶603§responsabilité§obligation faite à une personne de répondre de ses actes (du fait du rôle qu’elle doit assumer) et d’en supporter les conséquences§¶603§angoisse§inquiétude intense, liée à une situation d’attente, de doute, de solitude et qui fait pressentir des malheurs ou des souffrances graves devant lesquels on se sent impuissant§s¶603§engagement§participation active, par une option conforme à ses convictions profondes, à la vie sociale, politique, religieuse ou intellectuelle de son temps§¶604§ergoter§(péjoratif) contredire avec des arguments trop subtils§s¶604§plaidoyer§exposé argumenté en faveur d’une idée, d’une personne§s¶604§pourparlers§discussion entre deux parties afin d’arriver à un accord§s¶604§argutie§argumentation trop subtile dont on use pour pallier la faiblesse, le vide ou la fausseté de la pensée§¶604§fustiger§attaquer, combattre, critiquer violemment§s¶604§pinailler§avoir le souci exagéré des détails ; argumenter sans cesse de façon mesquine§s¶604§sophisme§argument en apparence valide ou vrai, mais en réalité faux ou non concluant, avancé avec mauvaise foi dans l’intention de tromper§¶604§admonester§donner un avertissement, un blâme§s¶604§induire§amener à || tirer (une conséquence), en généralisant§s¶604§négocier§traiter (une affaire) avec qqn pour parvenir à un accord§s¶604§syllogisme§raisonnement déductif rigoureux formé de trois propositions, deux prémisses et une conclusion§¶604§paralogisme§faute involontaire de raisonnement qui se fonde sur des prémisses fausses§¶604§chicane§difficulté qu’on soulève dans un procès pour embrouiller l’affaire§¶604§délibération§discussion pour prendre une décision§s¶604§objecter§opposer (un argument, une idée) pour réfuter une affirmation§s¶605§baratin§(populaire) flot de paroles motivé par la volonté de tromper ou de séduire§s¶605§grandiloquent§qui s’exprime de façon exagérément pompeuse et emphatique§s¶605§jacasser§pousser un cri (en parlant de la pie) || tenir, avec une voix fatigante, des propos futiles§s¶605§bagou§(familier) bavardage effronté qui cherche à duper§s¶605§pompe§déploiement de luxe || recherche excessive du style§s¶605§rhétorique§technique du discours, règles de l’art de bien parler§¶605§loquace§qui parle volontiers et abondamment, bavard§s¶605§orateur§personne qui parle devant un public§¶605§verbiage§abondance de paroles vides de sens§s¶605§sermon§discours d’un prédicateur pour instruire les fidèles || long discours moralisateur et ennuyeux§s¶605§pérorer§discourir longuement, de façon prétentieuse§s¶605§verve§inspiration vive et créatrice, en partic. pour l’écriture§s¶605§éloquence§manière de s’exprimer de façon à persuader et à émouvoir§¶605§emphase§exagération dans la manière de dire ou d’écrire§s¶605§tribun§orateur politique puissant, direct, et qui sait s’adresser à la foule§s¶606§asservir§rendre esclave || mettre sous entière dépendance§¶606§joug§pièce de bois servant à atteler un bœuf || domination§s¶606§brimer§accabler, persécuter§s¶606§sommer§ordonner à qqn de faire qqc (-- qqn de qqc)§s¶606§discréditer§faire perdre à qqn ou qqc la considération qu’on a pour lui§¶606§potentat§souverain absolu || personne qui possède un pouvoir excessif || personnage important§¶606§obtempérer§obéir sans discuter§s¶606§extorquer§obtenir sans consentement par la menace ou par la ruse (-- qqc à qqn)§s¶606§ascendant§influence, autorité§s¶606§évincer§écarter (qqn ou qqc) d’une place avantageuse§s¶606§disculper§prouver que quelqu’un est accusé à tort, innocenter§s¶606§apanage§ce qui appartient en propre à qqn ou qqc, ce qui en est le privilège§¶606§opprimer§infliger des vexations || contraindre§s¶606§despote§(généralement péj.) chef d’État qui gouverne avec une autorité absolue et arbitraire, tyran§s¶606§démagogie§fait de flatter le peuple, une collectivité, un auditoire§¶606§dissuader§amener qqn à renoncer à son projet§¶606§hégémonie§domination totale§s¶606§exaction§action d’exiger qqc par la force§¶606§s\'arroger§s’attribuer par une décision personnelle§¶606§coercition§action de contraindre qqn à accomplir son devoir, à obéir à la loi§s¶607§défiance§crainte méfiante envers qqn ou qqc qui semble risqué ou dangereux§s¶607§euphorie§sentiment de bien-être, parfois excessif ou injustifié§s¶607§allégresse§démonstration vive, bruyante et collective de joie§s¶607§pathétique§qui émeut, notamment par l’évocation de la souffrance§s¶607§réprobation§jugement sévère de qqn pour son attitude§s¶607§gratitude§sentiment de reconnaissance pour un service rendu ou un bienfait reçu§s¶607§affectivité§faculté d’éprouver des sentiments ou des émotions§¶607§trivial§qui est banal, commun, bassement matériel voire vulgaire§s¶607§quiétude§tranquillité profonde de l’esprit§s¶607§effusion§action de se répandre || (figuré) action de donner libre cours à ses émotions§¶607§furibond§qui manifeste une fureur excessive§¶607§scabreux§qui présente des difficultés ou des risques || qui risque d’offenser la pudeur§¶607§pressentiment§prévision confuse, irraisonnée (d’une chose généralement défavorable)§¶607§rancœur§état de profonde amertume, de haine, lié au souvenir d’une injustice ou d’une désillusion§¶607§dubitatif§qui est en proie au doute§¶607§prosaïque§qui est devenu banal, ordinaire, qui n’a plus d’originalité || qui concerne la vie quotidienne || qui est grossier, vulgaire, qui ne respecte pas les bonnes manières§s¶607§grief§préjudice moral ou matériel || motif de plainte§s¶607§affliction§douleur profonde, abattement§s¶607§burlesque§qui développe des idées extravagantes à l’aide d’expressions bouffonnes || fantaisiste, bouffon, ridicule§s¶607§xénophobie§antipathie ou hostilité à l’égard des étrangers§¶608§tacite§qui n’est pas formellement exprimé, qui est sous-entendu, convenu§s¶608§tollé§cri collectif de protestation, d’indignation§s¶608§stipuler§(droit) énoncer dans un contrat || faire savoir expressément§s¶608§truculent§qui utilise des formules énergiques et des images expressives, de façon joviale et avec une grande liberté de ton, jusqu’à la familiarité, la grossièreté, la gaillardise§¶608§stigmatiser§imprimer une marque, laisser une trace || (figuré) blâmer, critiquer qqn durement et publiquement§s¶608§vitupérer§élever de vives protestations, pester§s¶608§éluder§éviter qqc, s’y dérober adroitement§s¶608§volubile§qui parle beaucoup, avec aisance et rapidité§s¶608§préconiser§recommander vivement et avec insistance§s¶608§péremptoire§qui est décisif, qui exclut toute discussion§¶608§prôner§vanter publiquement qqc pour convaincre de son excellence, de son utilité || recommander§s¶608§récrimination§reproche amer, protestation virulente§s¶608§digression§développement oral ou écrit qui s’écarte du thème principal§¶608§fulminer§lancer la foudre || (figuré) éclater en invectives ou en menaces, exploser sous l’effet de la colère§¶609§chapeau§court texte qui surmonte et résume un article§¶609§brève§information brièvement annoncée§¶609§encadré§petit texte isolé du texte principal§¶609§fait divers§article qui concerne un fait anecdotique ou inclassable§¶609§manchette§bord supérieur de la une d’un journal, avec le nom du journal, la date et le premier titre§¶609§critique§article qui juge une œuvre littéraire ou artistique§¶609§chronique§article de journal qui traite régulièrement d’un thème particulier || énoncé de faits dans l’ordre chronologique§¶609§éditorial§article qui émane de la direction d’un journal et qui définit ou reflète son orientation générale§¶609§une§première page d’un journal§¶609§opinion§article argumentatif qui défend une thèse§¶609§ours§encadré où figure la liste des collaborateurs du journal§¶609§reportage§article d’un journaliste d’après ce qu’il a vu ou entendu sur le terrain§¶610§pallier§(médecine) atténuer un mal sans le guérir || remédier (à un problème) en apparence, ou provisoirement§¶610§démanteler§démolir les fortifications || (figuré) détruire ce qui était organisé et l’éparpiller§s¶610§marasme§(figuré) état d’une activité qui n’évolue pas (en partic. l’économie)§¶610§dilatoire§(droit) qui vise à retarder une instruction ou un jugement || qui essaie de gagner du temps, d’obtenir un délai§¶610§réticent§qui marque une réserve, qui n’approuve pas, qui fait preuve de peu de zèle§¶610§médiation§fait de servir d’intermédiaire entre plusieurs choses || entremise destinée à concilier des personnes qui sont en désaccord§¶610§ajourner§remettre à plus tard (en partic. une affaire de justice)§s¶610§atermoiement§(souvent au pluriel) action d’hésiter sans fin, de retarder une décision§s¶610§gageure§entreprise difficile, mais qu’on poursuit (souvent par défi)§¶610§diversion§(techn. militaire) opération stratégique consistant à détourner l’ennemi du point qu’il occupe en le poussant à se déplacer vers un autre front || action de détourner qqn de son activité principale§¶610§endiguer§contenir (un fleuve, une rivière, etc.) avec des digues || (figuré) empêcher (qqc) de prendre de l’ampleur, contenir (qqc) dans certaines limites§¶610§instigateur§celui qui pousse qqn à accomplir une action (souvent mauvaise)§¶610§pragmatique§qui concerne les faits et l’action || qui préfère les actions réussies plutôt que les principes théoriques et les idéaux§¶610§rédhibitoire§qui présente un défaut inacceptable§¶610§perpétrer§accomplir (un acte malfaisant ou criminel)§';

