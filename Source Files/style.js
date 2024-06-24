const refData = [
    { ptName: "F_AAST", ptRef: "00952_10_01984", ptResEntity: "EXPLEO" },
    { ptName: "F_ACC", ptRef: "00949_15_04798", ptResEntity: "EXPLEO" },
    { ptName: "F_ACPK", ptRef: "00949_15_04405", ptResEntity: "EXPLEO" },
    { ptName: "F_ACTI", ptRef: "00952_09_04737", ptResEntity: "EXPLEO" },
    { ptName: "F_ACVCC", ptRef: "00949_13_05840", ptResEntity: "STELLANTIS" },
    { ptName: "F_ACVCC (SIL_HIL)", ptRef: "00949_15_05510", ptResEntity: "STELLANTIS" },
    { ptName: "F_ADC", ptRef: "00952_09_06160", ptResEntity: "STELLANTIS" },
    { ptName: "F_HA (ADEC)", ptRef: "00952_09_02160", ptResEntity: "TBD" },
    { ptName: "F_AFIL", ptRef: "00952_09_05759", ptResEntity: "EXPLEO" },
    { ptName: "F_AGEE TBT", ptRef: "00949_11_03684", ptResEntity: "TBD" },
    { ptName: "F_AGEE_MOT", ptRef: "00952_09_03501", ptResEntity: "STELLANTIS" },
    { ptName: "F_AIRQ", ptRef: "00949_14_05984", ptResEntity: "STELLANTIS" },
    { ptName: "F_AIRQ_PURIF", ptRef: "00949_16_00126", ptResEntity: "STELLANTIS" },
    { ptName: "F_AMVAR", ptRef: "00949_15_03407", ptResEntity: "EXPLEO" },
    { ptName: "F_ANBC", ptRef: "00949_16_00088", ptResEntity: "EXPLEO" },
    { ptName: "F_AQEB", ptRef: "00949_16_01107", ptResEntity: "EXPLEO" },
    { ptName: "F_AQEB SW (SP5 V28)", ptRef: "01642_23_01657", ptResEntity: "EXPLEO" },
    { ptName: "F_ARMTH", ptRef: "00949_15_03337", ptResEntity: "STELLANTIS" },
    { ptName: "F_ARTIV 2010", ptRef: "00952_10_04165", ptResEntity: "STELLANTIS" },
    { ptName: "F_AUTO_DIAG", ptRef: "00952_10_03359", ptResEntity: "TBD" },
    { ptName: "F_AVN", ptRef: "00949_15_04349", ptResEntity: "EXPLEO" },
    { ptName: "F_VPARK (AVP)", ptRef: "00949_15_03511", ptResEntity: "STELLANTIS" },
    { ptName: "F_AVR", ptRef: "00952_09_02605", ptResEntity: "STELLANTIS" },
    { ptName: "F_BIG_DATA_2010", ptRef: "01272_19_02148", ptResEntity: "EXPLEO" },
    { ptName: "F_BOOT_2010", ptRef: "00952_10_06149", ptResEntity: "STELLANTIS" },
    { ptName: "F_BOOT_2010_ECO", ptRef: "00949_11_01276", ptResEntity: "STELLANTIS" },
    { ptName: "F_BOOT_2010_EV", ptRef: "00949_13_04880", ptResEntity: "STELLANTIS" },
    { ptName: "F_BV", ptRef: "00949_15_03328", ptResEntity: "EXPLEO" },
    { ptName: "F_BV SW (SP5 V28)", ptRef: "01642_23_01028", ptResEntity: "EXPLEO" },
    { ptName: "F_CAAR 2010", ptRef: "00952_10_01982", ptResEntity: "TBD" },
    { ptName: "F_CCA", ptRef: "00952_10_00561", ptResEntity: "STELLANTIS" },
    { ptName: "F_CGEPV", ptRef: "00949_11_03687", ptResEntity: "STELLANTIS" },
    { ptName: "F_CMDM", ptRef: "00949_11_03732", ptResEntity: "STELLANTIS" },
    { ptName: "F_CODE_UCE", ptRef: "01272_20_00072", ptResEntity: "TBD" },
    { ptName: "F_COLOR_NUM", ptRef: "00949_11_02733", ptResEntity: "STELLANTIS" },
    { ptName: "F_CONFIG_VHL", ptRef: "00952_10_04402", ptResEntity: "STELLANTIS" },
    { ptName: "F_CONFORT_THERMIQUE", ptRef: "00952_09_05409", ptResEntity: "EXPLEO" },
    { ptName: "F_COUCHE_RESEAU_DIAG", ptRef: "00949_11_00446", ptResEntity: "STELLANTIS" },
    { ptName: "F_DAA_COCKPIT", ptRef: "00949_15_04146", ptResEntity: "STELLANTIS" },
    { ptName: "F_DAA3", ptRef: "01642_21_00841", ptResEntity: "STELLANTIS" },
    { ptName: "F_DAA4", ptRef: "01642_23_00827", ptResEntity: "EXPLEO" },
    { ptName: "F_DAA4", ptRef: "00949_16_00914", ptResEntity: "STELLANTIS" },
    { ptName: "F_DAGMP", ptRef: "00952_10_00226", ptResEntity: "EXPLEO" },
    { ptName: "F_DAMGE", ptRef: "00949_11_01378", ptResEntity: "STELLANTIS" },
    { ptName: "F_DCM", ptRef: "00952_09_05316", ptResEntity: "EXPLEO" },
    { ptName: "F_DEB", ptRef: "00952_09_05402", ptResEntity: "EXPLEO" },
    { ptName: "F_DELESTAGE_TOURNANT", ptRef: "00949_15_00179", ptResEntity: "EXPLEO" },
    { ptName: "F_DESPCR", ptRef: "00949_15_03488", ptResEntity: "EXPLEO" },
    { ptName: "F_DIRA", ptRef: "00952_09_01918", ptResEntity: "EXPLEO" },
    { ptName: "F_DOP", ptRef: "00952_09_05795", ptResEntity: "EXPLEO" },
    { ptName: "F_DPC", ptRef: "00952_09_05782", ptResEntity: "EXPLEO" },
    { ptName: "F_DSGNR", ptRef: "00952_09_01840", ptResEntity: "STELLANTIS" },
    { ptName: "F_DSGR", ptRef: "00952_10_04151", ptResEntity: "EXPLEO" },
    { ptName: "F_DSV", ptRef: "00949_16_02058", ptResEntity: "EXPLEO" },
    { ptName: "F_ECLI", ptRef: "00952_10_02392", ptResEntity: "EXPLEO" },
    { ptName: "F_ECLX", ptRef: "01272_19_00182", ptResEntity: "ALTEN" },
    { ptName: "F_ECLX_ANIMATION", ptRef: "01642_23_00886", ptResEntity: "ALTEN" },
    { ptName: "F_ECLX_SIGN", ptRef: "00949_16_05061", ptResEntity: "TBD" },
    { ptName: "F_ECOCOACH", ptRef: "00949_15_03218", ptResEntity: "EXPLEO" },
    { ptName: "F_EDR", ptRef: "01272_19_00289", ptResEntity: "EXPLEO" },
    { ptName: "F_EMOVE", ptRef: "00949_15_03329", ptResEntity: "EXPLEO" },
    { ptName: "F_EOBD", ptRef: "00952_09_02145", ptResEntity: "EXPLEO" },
    { ptName: "F_ESL", ptRef: "00952_10_05014", ptResEntity: "EXPLEO" },
    { ptName: "F_ESP", ptRef: "00952_09_04515", ptResEntity: "EXPLEO" },
    { ptName: "F_FAP", ptRef: "00952_09_05953", ptResEntity: "EXPLEO" },
    { ptName: "F_FARC_Urbain", ptRef: "00949_12_03250", ptResEntity: "STELLANTIS" },
    { ptName: "F_FREINER", ptRef: "00952_09_05641", ptResEntity: "EXPLEO" },
    { ptName: "F_GAV", ptRef: "01272_20_01572", ptResEntity: "EXPLEO" },
    { ptName: "F_GAV", ptRef: "00949_16_04107", ptResEntity: "STELLANTIS" },
    { ptName: "F_GCT", ptRef: "00952_09_02758", ptResEntity: "EXPLEO" },
    { ptName: "F_GCT SW (SP5 V28)", ptRef: "01642_23_01030", ptResEntity: "EXPLEO" },
    { ptName: "F_GHD", ptRef: "00952_10_05196", ptResEntity: "STELLANTIS" },
    { ptName: "F_GSI", ptRef: "00952_10_00039", ptResEntity: "EXPLEO" },
    { ptName: "F_HADC", ptRef: "00949_14_03630", ptResEntity: "EXPLEO" },
    { ptName: "F_HW_BSI_2010", ptRef: "00952_10_01561", ptResEntity: "STELLANTIS" },
    { ptName: "F_HW_BSI_2010_ECO", ptRef: "00952_10_02705", ptResEntity: "STELLANTIS" },
    { ptName: "F_TELEMATIQUE", ptRef: "00952_09_02097", ptResEntity: "STELLANTIS" },
    { ptName: "F_IDEA_INSTRUM", ptRef: "00949_14_03113", ptResEntity: "STELLANTIS" },
    { ptName: "F_IDEA_MP", ptRef: "00949_14_06207", ptResEntity: "STELLANTIS" },
    { ptName: "F_IDEA_PCC", ptRef: "00949_14_02987", ptResEntity: "STELLANTIS" },
    { ptName: "F_ILV", ptRef: "00949_16_00063", ptResEntity: "EXPLEO" },
    { ptName: "F_INFOGMP", ptRef: "00952_09_04906", ptResEntity: "EXPLEO" },
    { ptName: "F_IRC", ptRef: "00949_16_01158", ptResEntity: "EXPLEO" },
    { ptName: "F_JGC", ptRef: "00949_10_05038", ptResEntity: "EXPLEO" },
    { ptName: "F_LISTE ALERTES", ptRef: "00949_12_06323", ptResEntity: "TBD" },
    { ptName: "F_LKA", ptRef: "00949_14_03638", ptResEntity: "STELLANTIS" },
    { ptName: "F_MAINTENANCE", ptRef: "00952_09_06067", ptResEntity: "EXPLEO" },
    { ptName: "F_PHAB", ptRef: "00949_16_00023", ptResEntity: "EXPLEO" },
    { ptName: "F_MISE_EN_SERVICE", ptRef: "00949_13_00809", ptResEntity: "STELLANTIS" },
    { ptName: "F_MPD", ptRef: "00952_09_02604", ptResEntity: "STELLANTIS" },
    { ptName: "F_MROSU", ptRef: "00949_10_05011", ptResEntity: "STELLANTIS" },
    { ptName: "F_NAV", ptRef: "00949_13_04829", ptResEntity: "STELLANTIS" },
    { ptName: "F_NIVEAU_HUILE", ptRef: "00949_14_04647", ptResEntity: "EXPLEO" },
    { ptName: "F_OARM", ptRef: "00949_13_05126", ptResEntity: "STELLANTIS" },
    { ptName: "F_ODB", ptRef: "00952_09_02589", ptResEntity: "EXPLEO" },
    { ptName: "F_ODOMETRE (IVV)", ptRef: "00952_09_03893", ptResEntity: "EXPLEO" },
    { ptName: "F_OFOLAT", ptRef: "00949_13_05034", ptResEntity: "EXPLEO" },
    { ptName: "F_OLVI", ptRef: "00949_15_03517", ptResEntity: "EXPLEO" },
    { ptName: "F_OTA_UPDATE", ptRef: "01272_20_00207", ptResEntity: "STELLANTIS" },
    { ptName: "F_PARAM", ptRef: "00949_15_03334", ptResEntity: "EXPLEO" },
    { ptName: "F_PASS_CAN_CAN", ptRef: "00952_09_04658", ptResEntity: "STELLANTIS" },
    { ptName: "F_PASS_CAN_LIN", ptRef: "00952_09_03068", ptResEntity: "TBD" },
    { ptName: "F_PASS_CANDIAG_LIN", ptRef: "00952_10_03384", ptResEntity: "TBD" },
    { ptName: "F_PEE", ptRef: "00952_09_02636", ptResEntity: "STELLANTIS" },
    { ptName: "F_PHASE_DE_VIE (PHV)", ptRef: "00949_11_05135", ptResEntity: "STELLANTIS" },
    { ptName: "F_RCD", ptRef: "00952_10_05860", ptResEntity: "STELLANTIS" },
    { ptName: "F_PHOT", ptRef: "00952_09_00951", ptResEntity: "EXPLEO" },
    { ptName: "F_PICC", ptRef: "00952_09_06088", ptResEntity: "EXPLEO" },
    { ptName: "F_PLACE", ptRef: "00949_15_02509", ptResEntity: "EXPLEO" },
    { ptName: "F_PRESH", ptRef: "00952_09_01511", ptResEntity: "EXPLEO" },
    { ptName: "F_PTCA", ptRef: "00949_12_04970", ptResEntity: "EXPLEO" },
    { ptName: "F_REPAS_HAB", ptRef: "00952_09_04972", ptResEntity: "EXPLEO" },
    { ptName: "F_REPAS_SC", ptRef: "00952_09_02451", ptResEntity: "EXPLEO" },
    { ptName: "F_RTAB", ptRef: "01272_18_01243", ptResEntity: "ALTEN" },
    { ptName: "F_SAM", ptRef: "00952_09_00704", ptResEntity: "EXPLEO" },
    { ptName: "F_SCPB", ptRef: "00949_10_00328", ptResEntity: "EXPLEO" },
    { ptName: "F_SCPB", ptRef: "01272_20_01239", ptResEntity: "EXPLEO" },
    { ptName: "F_SCR", ptRef: "01272_19_01208", ptResEntity: "EXPLEO" },
    { ptName: "F_SCR", ptRef: "00952_10_02893", ptResEntity: "EXPLEO" },
    { ptName: "F_Scrapping", ptRef: "00949_11_00466", ptResEntity: "EXPLEO" },
    { ptName: "F_SIGNALER", ptRef: "00952_10_06515", ptResEntity: "EXPLEO" },
    { ptName: "F_SOFT MONTAGE", ptRef: "00952_09_06099", ptResEntity: "ALTEN" },
    { ptName: "F_TELECODAGE_SECU", ptRef: "00952_09_04512", ptResEntity: "STELLANTIS" },
    { ptName: "F_TEMPERATURE_HUILE", ptRef: "00952_09_01699", ptResEntity: "EXPLEO" },
    { ptName: "F_TLDIAG", ptRef: "00949_13_04199", ptResEntity: "STELLANTIS" },
    { ptName: "F_TOV", ptRef: "00949_13_04672", ptResEntity: "STELLANTIS" },
    { ptName: "F_TSC", ptRef: "00949_12_05131", ptResEntity: "EXPLEO" },
    { ptName: "F_VTOR", ptRef: "00949_13_05530", ptResEntity: "EXPLEO" },
    { ptName: "F_XVV", ptRef: "00949_15_05294", ptResEntity: "EXPLEO" }
];

const tabBody1 = $("#ptTabBody")

refData.forEach((item, index) =>{

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.ptName}</td>
    <td><a href="http://docinfogroupe.inetpsa.com/ead/doc/ref.${item.ptRef}/v.vc/fiche">${item.ptRef}</a></td>
    <td>${item.ptResEntity}</td>
    `;

    if(item.ptResEntity === "EXPLEO"){
        $(row).css("backgroundColor", "rgba(103, 27, 199, 0.5)");
    } else if (item.ptResEntity === "ALTEN"){
        $(row).css("backgroundColor", "yellow")
    }

    tabBody1.append(row);
});

const docRefData = [
    {docName: "Param Global", docRef : "00949_11_00178", qiaRef : "01642_23_00140"},
    {docName: "DCI Global", docRef : "02016_11_06093", qiaRef : ""},
    {docName: "EC Referentiel", docRef : "02016_11_04964", qiaRef : "01272_23_00190"},
    {docName: "SSF Testplan", docRef : "00952_10_05276", qiaRef : "00952_09_01398"},
    {docName: "Config Thematiques", docRef : "00952_09_05196", qiaRef : "01272_23_00190"},
    {docName: "STG Calibration", docRef : "AEEV_PROJ08_0046", qiaRef : ""},
    {docName: "MESSAGERIE (Frames)", docRef : "00952_09_03212", qiaRef : ""},
    {docName: "ST DDD", docRef : "AEEV_AESV07_1573", qiaRef : ""},
    {docName: "Synthese Archi", docRef : "00949_16_01952", qiaRef : "00949_16_03918"},
    {docName: "DIAG Messagerie", docRef : "966527219A", qiaRef : ""},
    {docName: "SI Alert", docRef : "01255_08_00390", qiaRef : "01255_10_01507"},
    {docName: "WKPI", docRef : "01272_20_02392", qiaRef : ""},
    {docName: "Test Book Writing Guide", docRef : "00952_09_00540", qiaRef : ""},
    {docName: "Analyse de Entrant", docRef : "01272_19_02283", qiaRef : ""},
    {docName: "Checklist DC Review BSI", docRef : "01642_21_00222", qiaRef : ""},
    {docName: "Macro Updation", docRef : "01272_18_00034", qiaRef : ""},
    {docName: "HED SUIIVI", docRef : "01272_20_02108", qiaRef : ""},

];

const tabBody2 = $("#gbDocTabBody");

docRefData.forEach((item, index) =>{

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.docName}</td>
    <td><a href="http://docinfogroupe.inetpsa.com/ead/doc/ref.${item.docRef}/v.vc/fiche">${item.docRef}</a></td>
    <td><a href="http://docinfogroupe.inetpsa.com/ead/doc/ref.${item.qiaRef}/v.vc/fiche">${item.qiaRef}</a></td>
    `;

    tabBody2.append(row);

    });


document.addEventListener('DOMContentLoaded', function() {
    const ptFilterInput = document.getElementById('ptRefFilter'), docFilterInput = document.getElementById('docRefFilter');
    const ptTable = document.getElementById('ptTable'), docTable = document.getElementById('docTable');
    const tbodyPT = ptTable.getElementsByTagName('tbody')[0], tbodyDOC = docTable.getElementsByTagName('tbody')[0];
    const ptRows = tbodyPT.getElementsByTagName('tr'), docRows = tbodyDOC.getElementsByTagName('tr');

    ptFilterInput.addEventListener('keyup', function() {
        const filter = ptFilterInput.value.toLowerCase();
        for (let i = 0; i < ptRows.length; i++) {
            let shouldDisplay = false;
            const cells = ptRows[i].getElementsByTagName('td');
            for (let j = 0; j < cells.length; j++) {
                const cell = cells[j];
                if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
                    shouldDisplay = true;
                    break;
                }
            }
            ptRows[i].style.display = shouldDisplay ? '' : 'none';
        }
    });

    docFilterInput.addEventListener('keyup', function() {
        const filter = docFilterInput.value.toLowerCase();
        for (let i = 0; i < docRows.length; i++) {
            let shouldDisplay = false;
            const cells = docRows[i].getElementsByTagName('td');
            for (let j = 0; j < cells.length; j++) {
                const cell = cells[j];
                if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
                    shouldDisplay = true;
                    break;
                }
            }
            docRows[i].style.display = shouldDisplay ? '' : 'none';
        }
    });
});