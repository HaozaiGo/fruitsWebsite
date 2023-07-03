import html2canvas from "html2canvas";
import JSPDF from "jspdf";
import moment from "moment";

export default {
  install(Vue, options) {
    Vue.prototype.ExportSavePdf = function(pdfData, currentTime) {
      let detail = pdfData.detail;
      let avg = pdfData.avg;
      let allData = pdfData.allData;
      var pdf = new JSPDF("a4"); // A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域190x277
      // 获取日期
      let date = new Date();
      let nowDay = moment(date).format("YYYY/MM/DD");
      pdf.setFontSize(8);
      pdf.setTextColor("#b1adad");
      pdf.text(10, 10, nowDay);
      // 标题
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor("black");
      pdf.text("Inspection Report", 105, 16, null, null, "center");
      // 添加logo
      pdf.addImage("./static/logo2.png", "PNG", 170.47, 10, 29.53, 14.34); //x:210-10-29.53,y:10+12
      // 添加文字
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");
      let text1 = `Lot: ${detail.lot} – ${detail.product} – ${detail.package} – ${detail.date} – General Information
      `;
      pdf.text(text1, 105, 28, null, null, "center");
      // 添加红色背景
      pdf.setFillColor("#891735");
      pdf.rect(10, 32, 190, 8, "F");
      // 添加文字
      pdf.setFontSize(10, "normal");
      pdf.setTextColor("white");
      let text2 = "Lot Information";
      pdf.text(12, 37, text2);
      // 添加文字
      pdf.setFontSize(8, "normal");
      pdf.setTextColor("black");
      pdf.text(12, 44, "Inspection Date:" + detail.date);
      pdf.text(80, 44, "Product Type:" + detail.productType);
      pdf.text(140, 44, "Time Warehouse:" + detail.warehouseDate);
      pdf.text(12, 48, "Company: " + detail.company);
      pdf.text(80, 48, "Reference: " + detail.reference);
      pdf.text(12, 52, "Shipper/Importer: " + detail.shipperConsignee);
      pdf.text(80, 52, "Carrier Type: " + detail.carrierType);
      pdf.text(12, 56, "Location: " + detail.location);
      pdf.text(80, 56, "Arrival Date: " + detail.arrivalDate);
      pdf.text(12, 60, "Lot Number: " + "");
      pdf.text(80, 60, "Warehouse Date: " + detail.warehouseDate);
      pdf.text(12, 64, "# of Pallets:  ");
      pdf.text(80, 64, "Cases: " + detail.cases);
      pdf.text(12, 68, "Product:  " + detail.product);
      pdf.text(80, 68, "Country: " + detail.country);
      pdf.text(12, 72, "Package:  " + detail.package);
      pdf.text(80, 72, "Fumigation: " + detail.fumigation);
      // 添加红色背景
      pdf.setFillColor("#891735");
      pdf.rect(10, 76, 190, 8, "F");
      // 添加文字
      pdf.setFontSize(10, "normal");
      pdf.setTextColor("white");
      let text3 = "Lot Summary";
      pdf.text(12, 81, text3);
      // 添加文字
      pdf.setFontSize(8);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor("black");
      pdf.text(12, 88, "Net Weight Avg:");
      pdf.setFont("helvetica", "normal");
      //

      pdf.text(12, 92, avg.netWeightAvg);
      //
      pdf.setFont("helvetica", "bold");
      pdf.text(12, 100, "Defects Summary:");
      // normal
      // let defectsSummary1 = `${avg.bloomAvg} Bloom, 0.53% RS NB AS FR, 4.85% Undersize, ${avg.decayAvg}`;
      let defectsSummary1 = `${avg.bloomAvg} Bloom, ${avg.decayAvg} Decay, `;
      let defectsSummary2 = `${avg.moldAvg} Mold, ${avg.softAvg} Soft, ${avg.sensitiveAvg} Sensitive, ${avg.shrivelingAvg} Shriveling,`;
      // let defectsSummary3 = `0.28% BrokenSkin Wounds Crushed`;
      pdf.setFont("helvetica", "normal");
      pdf.text(12, 104, defectsSummary1);
      pdf.text(12, 108, defectsSummary2);
      // pdf.text(12, 112, defectsSummary3);
      //
      pdf.setFont("helvetica", "bold");
      pdf.text(12, 120, "Main Defects:");
      //
      // let mainDefects = "Micelio, Incidencia Micelio, Pudrici";
      pdf.setFont("helvetica", "normal");
      pdf.text(12, 124, avg.mainDefects.split("，"));

      let ReportHeight = 170;
      // 添加红色背景
      pdf.setFillColor("#891735");
      pdf.rect(10, ReportHeight, 190, 8, "F");
      // 添加文字
      pdf.setFontSize(10, "normal");
      pdf.setTextColor("white");
      let text4 = "Report Notes";
      pdf.text(12, ReportHeight + 5, text4);
      // 文字加粗
      pdf.setFontSize(8);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor("black");
      pdf.text(12, ReportHeight + 12, "Typing By:");
      pdf.setFont("helvetica", "normal");
      pdf.text(12, ReportHeight + 16, "Samuel F.");
      pdf.setFont("helvetica", "bold");
      pdf.text(12, ReportHeight + 24, "Typing Temperature Recorder: ");
      pdf.setFont("helvetica", "normal");
      pdf.text(12, ReportHeight + 28, "Temperature recorder serial");
      pdf.setFont("helvetica", "bold");
      pdf.text(12, ReportHeight + 36, "Package:");
      pdf.setFont("helvetica", "normal");
      pdf.text(12, ReportHeight + 40, "Ok");
      pdf.setFont("helvetica", "bold");
      pdf.text(12, ReportHeight + 48, "Traceability:");
      pdf.setFont("helvetica", "normal");
      pdf.text(12, ReportHeight + 52, "Ok");
      pdf.setFont("helvetica", "bold");
      pdf.text(12, ReportHeight + 60, "Temperature:");
      pdf.setFont("helvetica", "normal");
      pdf.text(
        12,
        ReportHeight + 64,
        "Pulp temperature at arrival between 1.5C to 3.4C."
      );
      pdf.setFont("helvetica", "bold");
      pdf.text(12, ReportHeight + 72, "Quality :");
      pdf.setFont("helvetica", "normal");
      pdf.text(
        12,
        ReportHeight + 76,
        "This lot present 31.4% poor and 68.56% bad quality and condition, due to presence of mold and soft fruit."
      );
      pdf.setFont("helvetica", "bold");
      pdf.text(12, ReportHeight + 84, "Inspector Notes:");
      pdf.setFont("helvetica", "normal");
      pdf.text(
        12,
        ReportHeight + 88,
        "Container has a 10% ventilation opening. at the time of opening there is no curtain. perforated packaging bags with generator inside."
      );
      // 底部
      pdf.setFontSize(8);
      pdf.setTextColor("#b1adad");
      nowDay = moment(date).format("YYYY/MM/DD HH:mm:ss");
      let uploadData = moment(detail.createdAt).format("YYYYMMDDHHmmss");

      pdf.text(
        uploadData +
          "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
          nowDay,
        105,
        280,
        null,
        null,
        "center"
      );

      // 新增页面
      pdf.addPage("a4", "1");
      // 标题
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor("black");
      pdf.text("Pallets Summary List", 105, 16, null, null, "center");
      // 添加logo
      pdf.addImage("./static/logo2.png", "PNG", 170.47, 10, 29.53, 14.34); //x:210-10-29.53,y:10+12
      // 添加文字
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");

      let text5 = `Lot: ${detail.lot}– Product: ${detail.product} – ${detail.package} – Date: ${detail.date}
      `;
      pdf.text(15, 28, text5);
      // 从这里开始循环

      let PalletsSummaryList = [];
      for (let i = 0; i < allData.length; i++) {
        PalletsSummaryList[i] = {};
        PalletsSummaryList[i].title = "Pallet " + allData[i].pallet;
        if (allData[i].sumOfTotalDefects < 5) {
          PalletsSummaryList[i].score = "Excellent";
        } else if (allData[i].sumOfTotalDefects < 10) {
          PalletsSummaryList[i].score = "Good";
        } else if (allData[i].sumOfTotalDefects < 15) {
          PalletsSummaryList[i].score = "Fair";
        } else if (allData[i].sumOfTotalDefects < 20) {
          PalletsSummaryList[i].score = "Poor";
        } else {
          PalletsSummaryList[i].score = "Bad";
        }
        PalletsSummaryList[i].number = "Pallet Number: " + allData[i].pallet;
        PalletsSummaryList[i].Destination = "Pallet # Destination: ";
        PalletsSummaryList[i].Boxes = "# Boxes: ";
      }
      for (let i = 0; i < PalletsSummaryList.length; i++) {
        // 判断分数
        let scoreColor = "";
        if (PalletsSummaryList[i].score === "Excellent") {
          scoreColor = "#1f6cad";
        } else if (PalletsSummaryList[i].score === "Good") {
          scoreColor = "#25AE5F";
        } else if (PalletsSummaryList[i].score === "Fair") {
          scoreColor = "#dfd545";
        } else if (PalletsSummaryList[i].score === "Poor") {
          scoreColor = "#da742c";
        } else if (PalletsSummaryList[i].score === "Bad") {
          scoreColor = "#da222e";
        }
        if (i % 3 === 0) {
          // 生成背景
          pdf.setFillColor("#891735");
          pdf.rect(10, 32 + 30 * (i / 3), 190, 8, "F");
          // 添加文字
          pdf.setFontSize(10);
          pdf.setTextColor("white");
          pdf.text(12, 37 + 30 * (i / 3), PalletsSummaryList[i].title);
          pdf.setFontSize(9);
          pdf.setFont("helvetica", "bold");
          pdf.setTextColor("black");
          pdf.text(15, 46 + 30 * (i / 3), PalletsSummaryList[i].score);
          pdf.setFillColor(scoreColor);
          pdf.rect(12, 42 + 30 * (i / 3), 2, 4, "F");
          pdf.setFont("helvetica", "normal");
          pdf.text(12, 50 + 30 * (i / 3), PalletsSummaryList[i].number);
          pdf.text(12, 54 + 30 * (i / 3), PalletsSummaryList[i].Destination);
          pdf.text(12, 58 + 30 * (i / 3), PalletsSummaryList[i].Boxes);
        } else if (i % 3 === 1) {
          // 添加文字
          pdf.setFontSize(10);
          pdf.setTextColor("white");
          pdf.text(
            76,
            37 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].title
          );
          pdf.setFontSize(9);
          pdf.setFont("helvetica", "bold");
          pdf.setTextColor("black");
          pdf.text(
            79,
            46 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].score
          );
          pdf.setFillColor(scoreColor);
          pdf.rect(76, 42 + 30 * ((i - (i % 3)) / 3), 2, 4, "F");
          pdf.setFont("helvetica", "normal");
          pdf.text(
            76,
            50 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].number
          );
          pdf.text(
            76,
            54 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].Destination
          );
          pdf.text(
            76,
            58 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].Boxes
          );
        } else if (i % 3 === 2) {
          pdf.setFontSize(10);
          pdf.setTextColor("white");
          pdf.text(
            140,
            37 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].title
          );
          pdf.setFontSize(9);
          pdf.setFont("helvetica", "bold");
          pdf.setTextColor("black");
          pdf.text(
            143,
            46 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].score
          );
          pdf.setFillColor(scoreColor);
          pdf.rect(140, 42 + 30 * ((i - (i % 3)) / 3), 2, 4, "F");
          pdf.setFont("helvetica", "normal");
          pdf.text(
            140,
            50 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].number
          );
          pdf.text(
            140,
            54 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].Destination
          );
          pdf.text(
            140,
            58 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].Boxes
          );
        }
      }

      // 详情数据页面
      let text6 = `Lot: ${detail.lot}– Product: ${detail.product} – ${detail.package} –  ${detail.date}
      `;
      let rowPosition = [45, 90, 135, 180];
      for (let i = 0; i < allData.length; i++) {
        if (i % 4 === 0) {
          // 新增页面
          pdf.addPage("a4", "1");
          // 标题
          pdf.setFontSize(16);
          pdf.setFont("helvetica", "bold");
          pdf.setTextColor("black");
          pdf.text("Pallets and Samples Detail", 105, 16, null, null, "center");
          // 添加logo
          pdf.addImage("./static/logo2.png", "PNG", 170.47, 10, 29.53, 14.34); //x:210-10-29.53,y:10+12
          // 添加文字
          pdf.setFontSize(9);
          pdf.setFont("helvetica", "normal");

          pdf.text(text6, 105, 20, null, null, "center");
          // 添加背景
          pdf.setFillColor("#a2a2a2");
          pdf.rect(10, 30, 190, 11, "F");
          // 添加文字
          pdf.setFontSize(8);
          pdf.setFont("helvetica", "normal");
          pdf.setTextColor("white");
          for (let j = 0; j < 4; j++) {
            if (i + j >= allData.length) return;
            pdf.text(
              ["Pallet", allData[i + j].pallet],
              rowPosition[j],
              35,
              null,
              null,
              "center"
            );
            
          }
          // 一列
          // 添加背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 42, 190, 6, "F");
          pdf.text("Sample 1", rowPosition[0], 46, null, null, "center");
          pdf.text("Sample 1", rowPosition[1], 46, null, null, "center");
          pdf.text("Sample 1", rowPosition[2], 46, null, null, "center");
          pdf.text("Sample 1", rowPosition[3], 46, null, null, "center");
          // finalScore
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Final Score", 25, 52, null, null, "right");
          pdf.text(
            allData[i].finalScore + "",
            rowPosition[0],
            52,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].finalScore + "",
            rowPosition[1],
            52,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].finalScore + "",
            rowPosition[2],
            52,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].finalScore + "",
            rowPosition[3],
            52,
            null,
            null,
            "center"
          );
          // 一列
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 54, 190, 6, "F");
          pdf.text("Overview", rowPosition[0], 58, null, null, "center");
          pdf.text("Overview", rowPosition[1], 58, null, null, "center");
          pdf.text("Overview", rowPosition[2], 58, null, null, "center");
          pdf.text("Overview", rowPosition[3], 58, null, null, "center");
          // finalScore
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Main Defect", 25, 64, null, null, "right");
          // 数据
          pdf.text(
            allData[i + 0].mainDefect + "",
            rowPosition[0],
            64,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].mainDefect,
            rowPosition[1],
            64,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].mainDefect,
            rowPosition[2],
            64,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].mainDefect,
            rowPosition[3],
            64,
            null,
            null,
            "center"
          );
          pdf.text("Temp Avg", 25, 66, null, null, "right");
          pdf.text(
            allData[i + 0].tempAvg + "",
            rowPosition[0],
            66,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].tempAvg + "",
            rowPosition[1],
            66,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].tempAvg + "",
            rowPosition[2],
            66,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].tempAvg + "",
            rowPosition[3],
            66,
            null,
            null,
            "center"
          );
          pdf.text("Net Weight Avg", 25, 68, null, null, "right");
          pdf.text(
            allData[i + 0].netWeightAvg + "",
            rowPosition[0],
            68,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].netWeightAvg + "",
            rowPosition[1],
            68,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].netWeightAvg + "",
            rowPosition[2],
            68,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].netWeightAvg + "",
            rowPosition[3],
            68,
            null,
            null,
            "center"
          );
          // 一列
          // 填充背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 70, 190, 6, "F");
          pdf.text("General", rowPosition[0], 74, null, null, "center");
          pdf.text("General", rowPosition[1], 74, null, null, "center");
          pdf.text("General", rowPosition[2], 74, null, null, "center");
          pdf.text("General", rowPosition[3], 74, null, null, "center");
          // Cases Sample
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Cases Sample", 25, 80, null, null, "right");
          // 数据
          pdf.text(
            allData[i + 0].casesSample + "",
            rowPosition[0],
            80,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].casesSample + "",
            rowPosition[1],
            80,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].casesSample + "",
            rowPosition[2],
            80,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].casesSample + "",
            rowPosition[3],
            80,
            null,
            null,
            "center"
          );
          pdf.text("Sample Weight", 25, 82, null, null, "right");
          pdf.text(
            allData[i + 0].sampleWeight + "",
            rowPosition[0],
            82,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].sampleWeight + "",
            rowPosition[1],
            82,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].sampleWeight + "",
            rowPosition[2],
            82,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].sampleWeight + "",
            rowPosition[3],
            82,
            null,
            null,
            "center"
          );
          pdf.text("Samples Number", 25, 84, null, null, "right");
          pdf.text(
            allData[i + 0].samplesNumber + "",
            rowPosition[0],
            84,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].samplesNumber + "",
            rowPosition[1],
            84,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].samplesNumber + "",
            rowPosition[2],
            84,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].samplesNumber + "",
            rowPosition[3],
            84,
            null,
            null,
            "center"
          );
          pdf.text("20 Pieces Weight", 25, 86, null, null, "right");
          pdf.text(
            allData[i + 0].piecesWeight + "",
            rowPosition[0],
            86,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].piecesWeight + "",
            rowPosition[1],
            86,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].piecesWeight + "",
            rowPosition[2],
            86,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].piecesWeight + "",
            rowPosition[3],
            86,
            null,
            null,
            "center"
          );
          pdf.text("Sample Size", 25, 88, null, null, "right");
          pdf.text(
            allData[i + 0].sampleSize + "",
            rowPosition[0],
            88,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].sampleSize + "",
            rowPosition[1],
            88,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].sampleSize + "",
            rowPosition[2],
            88,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].sampleSize + "",
            rowPosition[3],
            88,
            null,
            null,
            "center"
          );
          pdf.text("Grower", 25, 90, null, null, "right");
          pdf.text(
            allData[i + 0].grower + "",
            rowPosition[0],
            90,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].grower + "",
            rowPosition[1],
            90,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].grower + "",
            rowPosition[2],
            90,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].grower + "",
            rowPosition[3],
            90,
            null,
            null,
            "center"
          );
          pdf.text("Block", 25, 92, null, null, "right");
          pdf.text(
            allData[i + 0].block + "",
            rowPosition[0],
            92,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].block + "",
            rowPosition[1],
            92,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].block + "",
            rowPosition[2],
            92,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].block + "",
            rowPosition[3],
            92,
            null,
            null,
            "center"
          );
          pdf.text("Variety", 25, 94, null, null, "right");
          pdf.text(
            allData[i + 0].variety + "",
            rowPosition[0],
            94,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].variety + "",
            rowPosition[1],
            94,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].variety + "",
            rowPosition[2],
            94,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].variety + "",
            rowPosition[3],
            94,
            null,
            null,
            "center"
          );
          pdf.text("Variety Code", 25, 96, null, null, "right");
          pdf.text(allData[i + 0].varietyCode + "", 96, null, null, "center");
          pdf.text(allData[i + 1].varietyCode + "", 96, null, null, "center");
          pdf.text(allData[i + 2].varietyCode + "", 96, null, null, "center");
          pdf.text(allData[i + 3].varietyCode + "", 96, null, null, "center");
          pdf.text("Packing Date", 25, 98, null, null, "right");
          pdf.text(
            allData[i + 0].packingDate + "",
            rowPosition[0],
            98,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].packingDate + "",
            rowPosition[1],
            98,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].packingDate + "",
            rowPosition[2],
            98,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].packingDate + "",
            rowPosition[3],
            98,
            null,
            null,
            "center"
          );
          pdf.text("Lote", 25, 100, null, null, "right");
          pdf.text(
            allData[i + 0].lote + "",
            rowPosition[0],
            100,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].lote + "",
            rowPosition[1],
            100,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].lote + "",
            rowPosition[2],
            100,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].lote + "",
            rowPosition[3],
            100,
            null,
            null,
            "center"
          );
          pdf.text("Label", 25, 102, null, null, "right");
          pdf.text(
            allData[i + 0].varietyCode + "",
            rowPosition[0],
            102,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].varietyCode + "",
            rowPosition[1],
            102,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].varietyCode + "",
            rowPosition[2],
            102,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].varietyCode + "",
            rowPosition[3],
            102,
            null,
            null,
            "center"
          );
          // 一列
          // 填充背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 104, 190, 6, "F");
          pdf.text("Other", rowPosition[0], 108, null, null, "center");
          pdf.text("Other", rowPosition[1], 108, null, null, "center");
          pdf.text("Other", rowPosition[2], 108, null, null, "center");
          pdf.text("Other", rowPosition[3], 108, null, null, "center");
          // Cases Sample
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Temperature", 25, 114, null, null, "right");
          pdf.text(
            allData[i + 3].temperature + "",
            rowPosition[0],
            114,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].temperature + "",
            rowPosition[1],
            114,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].temperature + "",
            rowPosition[2],
            114,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].temperature + "",
            rowPosition[3],
            114,
            null,
            null,
            "center"
          );
          pdf.text("Net Weight Avg", 25, 116, null, null, "right");
          pdf.text(
            allData[i + 3].netWeightAvg + "",
            rowPosition[0],
            116,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].netWeightAvg + "",
            rowPosition[1],
            116,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].netWeightAvg + "",
            rowPosition[2],
            116,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].netWeightAvg + "",
            rowPosition[3],
            116,
            null,
            null,
            "center"
          );
          pdf.text("Brix", 25, 118, null, null, "right");
          pdf.text(
            allData[i + 3].brix + "",
            rowPosition[0],
            118,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].brix + "",
            rowPosition[1],
            118,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].brix + "",
            rowPosition[2],
            118,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].brix + "",
            rowPosition[3],
            118,
            null,
            null,
            "center"
          );
          pdf.text("Baxlo Avg", 25, 120, null, null, "right");
          pdf.text(
            allData[i + 3].baxloAvg + "",
            rowPosition[0],
            120,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].baxloAvg + "",
            rowPosition[1],
            120,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].baxloAvg + "",
            rowPosition[2],
            120,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].baxloAvg + "",
            rowPosition[3],
            120,
            null,
            null,
            "center"
          );
          pdf.text("O2", 25, 122, null, null, "right");
          pdf.text(
            allData[i + 3].o2 + "",
            rowPosition[0],
            122,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].o2 + "",
            rowPosition[1],
            122,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].o2 + "",
            rowPosition[2],
            122,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].o2 + "",
            rowPosition[3],
            122,
            null,
            null,
            "center"
          );
          pdf.text("CO2", 25, 124, null, null, "right");
          pdf.text(
            allData[i + 3].co2 + "",
            rowPosition[0],
            124,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].co2 + "",
            rowPosition[1],
            124,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].co2 + "",
            rowPosition[2],
            124,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].co2 + "",
            rowPosition[3],
            124,
            null,
            null,
            "center"
          );
          // 一列
          // 填充背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 126, 190, 6, "F");
          pdf.text("Quality", rowPosition[0], 130, null, null, "center");
          pdf.text("Quality", rowPosition[1], 130, null, null, "center");
          pdf.text("Quality", rowPosition[2], 130, null, null, "center");
          pdf.text("Quality", rowPosition[3], 130, null, null, "center");

          // Cases Sample
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Foreign Body", 25, 136, null, null, "right");
          pdf.text(
            allData[i + 0].foreignBody + "",
            rowPosition[0],
            136,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].foreignBody + "",
            rowPosition[1],
            136,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].foreignBody + "",
            rowPosition[2],
            136,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].foreignBody + "",
            rowPosition[3],
            136,
            null,
            null,
            "center"
          );
          pdf.text("Contamination", 25, 138, null, null, "right");
          pdf.text(
            allData[i + 0].contamination + "",
            rowPosition[0],
            138,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].contamination + "",
            rowPosition[1],
            138,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].contamination + "",
            rowPosition[2],
            138,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].contamination + "",
            rowPosition[3],
            138,
            null,
            null,
            "center"
          );
          pdf.text("Size", 25, 140, null, null, "right");
          pdf.text(
            allData[i + 0].size + "",
            rowPosition[0],
            140,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].size + "",
            rowPosition[1],
            140,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].size + "",
            rowPosition[2],
            140,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].size + "",
            rowPosition[3],
            140,
            null,
            null,
            "center"
          );
          pdf.text("Consistency", 25, 142, null, null, "right");
          pdf.text(
            allData[i + 0].consistency + "",
            rowPosition[0],
            142,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].consistency + "",
            rowPosition[1],
            142,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].consistency + "",
            rowPosition[2],
            142,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].consistency + "",
            rowPosition[3],
            142,
            null,
            null,
            "center"
          );
          pdf.text("Bloom", 25, 144, null, null, "right");
          pdf.text(
            allData[i + 0].bloom + "",
            rowPosition[0],
            144,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].bloom + "",
            rowPosition[1],
            144,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].bloom + "",
            rowPosition[2],
            144,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].bloom + "",
            rowPosition[3],
            144,
            null,
            null,
            "center"
          );
          pdf.text("RS NB AS FR", 25, 146, null, null, "right");
          pdf.text(
            allData[i + 0].rsnbasfr + "",
            rowPosition[0],
            146,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].rsnbasfr + "",
            rowPosition[1],
            146,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].rsnbasfr + "",
            rowPosition[2],
            146,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].rsnbasfr + "",
            rowPosition[3],
            146,
            null,
            null,
            "center"
          );
          pdf.text("Misshapen", 25, 148, null, null, "right");
          pdf.text(
            allData[i + 0].misshapen + "",
            rowPosition[0],
            148,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].misshapen + "",
            rowPosition[1],
            148,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].misshapen + "",
            rowPosition[2],
            148,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].misshapen + "",
            rowPosition[3],
            148,
            null,
            null,
            "center"
          );
          pdf.text("Oversize", 25, 150, null, null, "right");
          pdf.text(
            allData[i + 0].oversize + "",
            rowPosition[0],
            150,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].oversize + "",
            rowPosition[1],
            150,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].oversize + "",
            rowPosition[2],
            150,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].oversize + "",
            rowPosition[3],
            150,
            null,
            null,
            "center"
          );
          pdf.text("Undersize", 25, 152, null, null, "right");
          pdf.text(
            allData[i + 0].underSize + "",
            rowPosition[0],
            152,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].underSize + "",
            rowPosition[1],
            152,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].underSize + "",
            rowPosition[2],
            152,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].underSize + "",
            rowPosition[3],
            152,
            null,
            null,
            "center"
          );
          pdf.text("Lack of Color", 25, 154, null, null, "right");
          pdf.text(
            allData[i + 0].lackOfColor + "",
            rowPosition[0],
            154,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].lackOfColor + "",
            rowPosition[1],
            154,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].lackOfColor + "",
            rowPosition[2],
            154,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].lackOfColor + "",
            rowPosition[3],
            154,
            null,
            null,
            "center"
          );
          // 一列
          // 填充背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 156, 190, 6, "F");
          pdf.text("Condition", rowPosition[0], 160, null, null, "center");
          pdf.text("Condition", rowPosition[1], 160, null, null, "center");
          pdf.text("Condition", rowPosition[2], 160, null, null, "center");
          pdf.text("Condition", rowPosition[3], 160, null, null, "center");
          //
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Decay", 25, 166, null, null, "right");
          pdf.text(
            allData[i + 0].decay + "",
            rowPosition[0],
            166,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].decay + "",
            rowPosition[1],
            166,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].decay + "",
            rowPosition[2],
            166,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].decay + "",
            rowPosition[3],
            166,
            null,
            null,
            "center"
          );
          pdf.text("Decay Incidence", 25, 168, null, null, "right");
          pdf.text(
            allData[i + 0].decayIncidence + "",
            rowPosition[0],
            168,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].decayIncidence + "",
            rowPosition[1],
            168,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].decayIncidence + "",
            rowPosition[2],
            168,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].decayIncidence + "",
            rowPosition[3],
            168,
            null,
            null,
            "center"
          );
          pdf.text("Mold", 25, 170, null, null, "right");
          pdf.text(
            allData[i + 0].mold + "",
            rowPosition[0],
            170,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].mold + "",
            rowPosition[1],
            170,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].mold + "",
            rowPosition[2],
            170,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].mold + "",
            rowPosition[3],
            170,
            null,
            null,
            "center"
          );
          pdf.text("Mold Incidence", 25, 172, null, null, "right");
          pdf.text(
            allData[i + 0].moldIncidence + "",
            rowPosition[0],
            172,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].moldIncidence + "",
            rowPosition[1],
            172,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].moldIncidence + "",
            rowPosition[2],
            172,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].moldIncidence + "",
            rowPosition[3],
            172,
            null,
            null,
            "center"
          );
          pdf.text("Mold Type", 25, 174, null, null, "right");
          pdf.text(
            allData[i + 0].moldType + "",
            rowPosition[0],
            174,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].moldType + "",
            rowPosition[1],
            174,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].moldType + "",
            rowPosition[2],
            174,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].moldType + "",
            rowPosition[3],
            174,
            null,
            null,
            "center"
          );
          pdf.text("Soft", 25, 176, null, null, "right");
          pdf.text(
            allData[i + 0].soft + "",
            rowPosition[0],
            176,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].soft + "",
            rowPosition[1],
            176,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].soft + "",
            rowPosition[2],
            176,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].soft + "",
            rowPosition[3],
            176,
            null,
            null,
            "center"
          );
          pdf.text("Sensitive", 25, 178, null, null, "right");
          pdf.text(
            allData[i + 0].sensitive + "",
            rowPosition[0],
            178,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].sensitive + "",
            rowPosition[1],
            178,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].sensitive + "",
            rowPosition[2],
            178,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].sensitive + "",
            rowPosition[3],
            178,
            null,
            null,
            "center"
          );
          pdf.text("Shriveling", 25, 180, null, null, "right");
          pdf.text(
            allData[i + 0].shriveling + "",
            rowPosition[0],
            180,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].shriveling + "",
            rowPosition[1],
            180,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].shriveling + "",
            rowPosition[2],
            180,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].shriveling + "",
            rowPosition[3],
            180,
            null,
            null,
            "center"
          );
          pdf.text("Pedicelar Sunken", 25, 182, null, null, "right");
          pdf.text(
            allData[i + 0].pedicelarSunken + "",
            rowPosition[0],
            182,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].pedicelarSunken + "",
            rowPosition[1],
            182,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].pedicelarSunken + "",
            rowPosition[2],
            182,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].pedicelarSunken + "",
            rowPosition[3],
            182,
            null,
            null,
            "center"
          );
          pdf.text("BS WS CR", 25, 184, null, null, "right");
          pdf.text(
            allData[i + 0].bswscr + "",
            rowPosition[0],
            184,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].bswscr + "",
            rowPosition[1],
            184,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].bswscr + "",
            rowPosition[2],
            184,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].bswscr + "",
            rowPosition[3],
            184,
            null,
            null,
            "center"
          );
          pdf.text("SO2 Damage", 25, 186, null, null, "right");
          pdf.text(
            allData[i + 0].so2Damage + "",
            rowPosition[0],
            186,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].so2Damage + "",
            rowPosition[1],
            186,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].so2Damage + "",
            rowPosition[2],
            186,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].so2Damage + "",
            rowPosition[3],
            186,
            null,
            null,
            "center"
          );
          pdf.text("Insect Presence", 25, 188, null, null, "right");
          pdf.text(
            allData[i + 0].insectPresence + "",
            rowPosition[0],
            188,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].insectPresence + "",
            rowPosition[1],
            188,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].insectPresence + "",
            rowPosition[2],
            188,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].insectPresence + "",
            rowPosition[3],
            188,
            null,
            null,
            "center"
          );
          // 一列
          // 填充背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 190, 190, 6, "F");
          pdf.text("Totals", rowPosition[0], 194, null, null, "center");
          pdf.text("Totals", rowPosition[1], 194, null, null, "center");
          pdf.text("Totals", rowPosition[2], 194, null, null, "center");
          pdf.text("Totals", rowPosition[3], 194, null, null, "center");
          //
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Sum of Quality Defects", 25, 200, null, null, "right");
          pdf.text(
            allData[i + 0].sumOfQualityDefects + "",
            rowPosition[0],
            200,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].sumOfQualityDefects + "",
            rowPosition[1],
            200,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].sumOfQualityDefects + "",
            rowPosition[2],
            200,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].sumOfQualityDefects + "",
            rowPosition[3],
            200,
            null,
            null,
            "center"
          );
          pdf.text("Sum of Condition Defects", 25, 202, null, null, "right");
          pdf.text(
            allData[i + 0].sumOfConditionDefects + "",
            rowPosition[0],
            202,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].sumOfConditionDefects + "",
            rowPosition[1],
            202,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].sumOfConditionDefects + "",
            rowPosition[2],
            202,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].sumOfConditionDefects + "",
            rowPosition[3],
            202,
            null,
            null,
            "center"
          );
          pdf.text("Sum of Total Defects", 25, 204, null, null, "right");
          pdf.text(
            allData[i + 0].sumOfTotalDefects + "",
            rowPosition[0],
            204,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 1].sumOfTotalDefects + "",
            rowPosition[1],
            204,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 2].sumOfTotalDefects + "",
            rowPosition[2],
            204,
            null,
            null,
            "center"
          );
          pdf.text(
            allData[i + 3].sumOfTotalDefects + "",
            rowPosition[3],
            204,
            null,
            null,
            "center"
          );
        }
      }

      pdf.save("qysw.pdf");
      //       var element = document.getElementById("pdfCentent");

      //       html2canvas(element, {
      //         logging: false,
      //       }).then(function(canvas) {
      //         var pdf = new JSPDF("p", "mm", "a4"); // A4纸，纵向
      //         var ctx = canvas.getContext("2d");
      //         var a4w = 170;
      //         var a4h = 257; // A4大小，210mm x 297mm，四边各保留20mm的边距，显示区域170x257
      //         var imgHeight = Math.floor((a4h * canvas.width) / a4w); // 按A4显示比例换算一页图像的像素高度
      //         var renderedHeight = 0;

      //         while (renderedHeight < canvas.height) {
      //           var page = document.createElement("canvas");
      //           page.width = canvas.width;
      //           page.height = Math.min(imgHeight, canvas.height - renderedHeight); // 可能内容不足一页

      //           // 用getImageData剪裁指定区域，并画到前面创建的canvas对象中
      //           page
      //             .getContext("2d")
      //             .putImageData(
      //               ctx.getImageData(
      //                 0,
      //                 renderedHeight,
      //                 canvas.width,
      //                 Math.min(imgHeight, canvas.height - renderedHeight)
      //               ),
      //               0,
      //               0
      //             );
      //           pdf.addImage(
      //             page.toDataURL("image/jpeg", 1.0),
      //             "JPEG",
      //             10,
      //             10,
      //             a4w,
      //             Math.min(a4h, (a4w * page.height) / page.width)
      //           ); // 添加图像到页面，保留10mm边距

      //           renderedHeight += imgHeight;
      //           if (renderedHeight < canvas.height) {
      //             pdf.addPage();
      //           } // 如果后面还有内容，添加一个空页
      //           // delete page;
      //         }
      //   pdf.save(htmlTitle + currentTime);

      //       });
    };
  },
};
