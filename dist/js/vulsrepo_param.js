var vulsrepo = {
    detailRawData: null,
    timeOut: 300 * 1000,
    link: {
        cwe_nvd: {
            url: "https://cwe.mitre.org/data/definitions/",
        },
        cwe_jvn: {
            url: "http://jvndb.jvn.jp/ja/cwe/",
        },
        mitre: {
            url: "https://cve.mitre.org/cgi-bin/cvename.cgi",
            disp: "MITRE",
            find: "RESERVED"
        },
        cve: {
            url: "http://www.cvedetails.com/cve/",
            disp: "CveDetails",
            find: "Unknown CVE ID"
        },
        nvd: {
            url: "https://web.nvd.nist.gov/view/vuln/detail",
            disp: "NVD",
            find: "CVE ID Not Found"
        },
        jvn: {
            url: "http://jvndb.jvn.jp/search/index.php?mode=_vulnerability_search_IA_VulnSearch&keyword=",
            disp: "JVN",
            find: "Not found"
        },
        cvss: {
            url: "https://nvd.nist.gov/cvss/v2-calculator",
            disp: "CVSSv2 Caluclator",
            find: "Warning: Unable to find vulnerability requested."
        },
        rhel: {
            url: "https://access.redhat.com/security/cve/",
            disp: "RHEL",
            find: "Not Found"
        },
        debian: {
            url: "https://security-tracker.debian.org/tracker/",
            disp: "Debian",
            find: "DO NOT USE THIS CANDIDATE NUMBER"
        },
        ubuntu: {
            url: "https://people.canonical.com/~ubuntu-security/cve/",
            disp: "Ubuntu",
            find: "DO NOT USE THIS CANDIDATE NUMBER"
        }
    }
};


var vulsrepo_template = [
    {
        key: '01. Graph: CVSS-Severity => ServerName',
        value: '{"derivedAttributes":{},"aggregators":{},"renderers":{},"hiddenAttributes":[],"menuLimit":3000,"cols":["ServerName"],"rows":["CVSS Severity"],"vals":[],"exclusions":{},"inclusions":{},"unusedAttrsVertical":85,"autoSortUnusedAttrs":false,"rendererOptions":{"localeStrings":{"renderError":"An error occurred rendering the PivotTable results.","computeError":"An error occurred computing the PivotTable results.","uiRenderError":"An error occurred rendering the PivotTable UI.","selectAll":"Select All","selectNone":"Select None","tooMany":"(too many to list)","filterResults":"Filter results","totals":"Totals","vs":"vs","by":"by"}},"localeStrings":{"renderError":"An error occurred rendering the PivotTable results.","computeError":"An error occurred computing the PivotTable results.","uiRenderError":"An error occurred rendering the PivotTable UI.","selectAll":"Select All","selectNone":"Select None","tooMany":"(too many to list)","filterResults":"Filter results","totals":"Totals","vs":"vs","by":"by"},"aggregatorName":"Count","rendererName":"Stacked Bar Chart","inclusionsInfo":{}}'
    },
    {
        key: '02. Graph: CVSS-Severity => CVSS-Score',
        value: '{"derivedAttributes":{},"aggregators":{},"renderers":{},"hiddenAttributes":[],"menuLimit":3000,"cols":["CVSS Score"],"rows":["CVSS Severity"],"vals":[],"exclusions":{},"inclusions":{},"unusedAttrsVertical":85,"autoSortUnusedAttrs":false,"rendererOptions":{"localeStrings":{"renderError":"An error occurred rendering the PivotTable results.","computeError":"An error occurred computing the PivotTable results.","uiRenderError":"An error occurred rendering the PivotTable UI.","selectAll":"Select All","selectNone":"Select None","tooMany":"(too many to list)","filterResults":"Filter results","totals":"Totals","vs":"vs","by":"by"}},"localeStrings":{"renderError":"An error occurred rendering the PivotTable results.","computeError":"An error occurred computing the PivotTable results.","uiRenderError":"An error occurred rendering the PivotTable UI.","selectAll":"Select All","selectNone":"Select None","tooMany":"(too many to list)","filterResults":"Filter results","totals":"Totals","vs":"vs","by":"by"},"aggregatorName":"Count","rendererName":"Stacked Bar Chart","inclusionsInfo":{}}'
    },
    {
        key: '03. Pivot: Package/CVSS-Severity/CveID/Summary => ServerName',
        value: '{"derivedAttributes":{},"aggregators":{},"renderers":{},"hiddenAttributes":[],"menuLimit":3000,"cols":["ServerName"],"rows":["Packages","CVSS Severity","CveID","Summary"],"vals":[],"exclusions":{},"inclusions":{},"unusedAttrsVertical":85,"autoSortUnusedAttrs":false,"rendererOptions":{"localeStrings":{"renderError":"An error occurred rendering the PivotTable results.","computeError":"An error occurred computing the PivotTable results.","uiRenderError":"An error occurred rendering the PivotTable UI.","selectAll":"Select All","selectNone":"Select None","tooMany":"(too many to list)","filterResults":"Filter results","totals":"Totals","vs":"vs","by":"by"}},"localeStrings":{"renderError":"An error occurred rendering the PivotTable results.","computeError":"An error occurred computing the PivotTable results.","uiRenderError":"An error occurred rendering the PivotTable UI.","selectAll":"Select All","selectNone":"Select None","tooMany":"(too many to list)","filterResults":"Filter results","totals":"Totals","vs":"vs","by":"by"},"aggregatorName":"Count","rendererName":"Heatmap","inclusionsInfo":{}}'
    },
    {
        key: '04. Pivot: Package/CveID => ScanTime',
        value: '{"derivedAttributes":{},"aggregators":{},"renderers":{},"hiddenAttributes":[],"menuLimit":3000,"cols":["ScanTime"],"rows":["Packages","CveID"],"vals":[],"exclusions":{},"inclusions":{},"unusedAttrsVertical":85,"autoSortUnusedAttrs":false,"rendererOptions":{"localeStrings":{"renderError":"An error occurred rendering the PivotTable results.","computeError":"An error occurred computing the PivotTable results.","uiRenderError":"An error occurred rendering the PivotTable UI.","selectAll":"Select All","selectNone":"Select None","tooMany":"(too many to list)","filterResults":"Filter results","totals":"Totals","vs":"vs","by":"by"}},"localeStrings":{"renderError":"An error occurred rendering the PivotTable results.","computeError":"An error occurred computing the PivotTable results.","uiRenderError":"An error occurred rendering the PivotTable UI.","selectAll":"Select All","selectNone":"Select None","tooMany":"(too many to list)","filterResults":"Filter results","totals":"Totals","vs":"vs","by":"by"},"aggregatorName":"Count","rendererName":"Heatmap","inclusionsInfo":{}}'
    }];

