const levelTable = $("th:contains(Leave Accrued)").parents("table");

const annualLeaveTD = $(levelTable).find("td:contains(Annual Leave)").next();
const sickLeaveTD = $(levelTable).find("td:contains(sick leave)").next();

const annualLevelDay = (Number(annualLeaveTD.text().trim().split(" ")[0]) / 7.6).toFixed(2);
const sickLeaveDay = (Number(sickLeaveTD.text().trim().split(" ")[0]) / 7.6).toFixed(2);

annualLeaveTD.text(`${annualLeaveTD.text()} (${annualLevelDay} days)`);
sickLeaveTD.text(`${sickLeaveTD.text()} (${sickLeaveDay} days)`);