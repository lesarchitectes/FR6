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
    
    for (var i = 0; i < mots.length; i++) {
        p = document.createElement('p');
        p.style.marginLeft = '11em';
        p.style.textIndent = '-11em';
        label = document.createElement('label');
        label.textContent = definitions[mots[i]];
        solution = document.createElement('label');
        solution.innerHTML = '<u>' + mots[i] + '</u> : ';
        solution.style.display = 'none';
        input = document.createElement('input');
        input.type = 'text';
        input.style.width = '10em';
        input.style.marginRight = '1em';
        input.className = 'reponse';
        input.setAttribute('list', 'mots');
        input.dataset.solution = mots[i];
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

var tsv = '610§pallier§(médecine) atténuer un mal sans le guérir || remédier (à un problème) en apparence, ou provisoirement§¶610§démanteler§démolir les fortifications || (figuré) détruire ce qui était organisé et l’éparpiller§s¶610§marasme§(figuré) état d’une activité qui n’évolue pas (en partic. l’économie)§¶610§dilatoire§(droit) qui vise à retarder une instruction ou un jugement || qui essaie de gagner du temps, d’obtenir un délai§¶610§réticent§qui marque une réserve, qui n’approuve pas, qui fait preuve de peu de zèle§¶610§médiation§fait de servir d’intermédiaire entre plusieurs choses || entremise destinée à concilier des personnes qui sont en désaccord§¶610§ajourner§remettre à plus tard (en partic. une affaire de justice)§s¶610§atermoiement§(souvent au pluriel) action d’hésiter sans fin, de retarder une décision§s¶610§gageure§entreprise difficile, mais qu’on poursuit (souvent par défi)§¶610§diversion§(techn. militaire) opération stratégique consistant à détourner l’ennemi du point qu’il occupe en le poussant à se déplacer vers un autre front || action de détourner qqn de son activité principale§¶610§endiguer§contenir (un fleuve, une rivière, etc.) avec des digues || (figuré) empêcher (qqc) de prendre de l’ampleur, contenir (qqc) dans certaines limites§¶610§instigateur§celui qui pousse qqn à accomplir une action (souvent mauvaise)§¶610§pragmatique§qui concerne les faits et l’action || qui préfère les actions réussies plutôt que les principes théoriques et les idéaux§¶610§rédhibitoire§qui présente un défaut inacceptable§¶610§perpétrer§accomplir (un acte malfaisant ou criminel)§';

