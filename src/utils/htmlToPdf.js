import JSPDF from "jspdf";
import moment from "moment";

export default {
  install(Vue, options) {
    Vue.prototype.ExportSavePdf = function (pdfData, currentTime) {

      let detail = pdfData.detail;
      let avg = pdfData.avg;
      let allData = pdfData.allData;
      console.log(allData);
      let imgList = pdfData.imgList;
      let defectsSummary = pdfData.defectsSummary;
      var pdf = new JSPDF("a4"); // A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域190x277
      // 添加字体
      pdf.addFont("./static/Poppins-Regular.ttf", "PoppinsRegular", "normal");
      // pdf.addFont("./static/Poppins-Bold.ttf", "PoppinsBold", "bold");
      pdf.addFont("./static/Poppins-SemiBold.ttf", "PoppinsSemiBold", "bold");
      // 获取日期
      pdf.setFont("PoppinsRegular", "normal");
      let date = new Date();
      let nowDay = moment(date).format("YYYY/MM/DD");
      pdf.setFontSize(8);
      pdf.setTextColor("#b1adad");
      pdf.text(10, 10, nowDay);
      // 标题
      pdf.setFontSize(16);
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.setTextColor("black");
      pdf.text("Inspection Report", 105, 16, null, null, "center");
      // 添加logo
      pdf.addImage(
        "./static/logo2.png",
        "PNG",
        170.47,
        10,
        29.53,
        14.34,
        "",
        "FAST"
      ); //x:210-10-29.53,y:10+12
      // 添加文字
      pdf.setFontSize(9);
      pdf.setFont("PoppinsRegular", "normal");
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
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.setTextColor("black");
      pdf.text(12, 88, "Net Weight Avg:");
      pdf.setFont("PoppinsRegular", "normal");
      //

      pdf.text(12, 92, avg.netWeightAvg);
      //
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.text(12, 100, "Defects Summary:");
      // normal
      let defectsSummary1 = defectsSummary.split("，").join(",");
      pdf.setFont("PoppinsRegular", "normal");
      let summaryList = [];
      let lastFind = defectsSummary1.lastIndexOf(",");
      for (let i = 0; i < Math.ceil(defectsSummary1.length / 90); i++) {
        if (i === 0) {
          let last =
            defectsSummary1.substring(90 * i, 90 * (i + 1)).lastIndexOf(",") +
            1;
          if (lastFind < last) {
            pdf.text(
              12,
              104 + i * 4,
              defectsSummary1.substring(90 * i, defectsSummary1.length)
            );
          } else {
            pdf.text(12, 104 + i * 4, defectsSummary1.substring(90 * i, last));
          }
          summaryList[i] = last;
        } else {
          let top = summaryList[i - 1];
          let last =
            summaryList[i - 1] +
            defectsSummary1.substring(top, 90 * (i + 1)).lastIndexOf(",") +
            1;
          if (lastFind < last) {
            pdf.text(
              12,
              104 + i * 4,
              defectsSummary1.substring(top, defectsSummary1.length)
            );
          } else {
            pdf.text(12, 104 + i * 4, defectsSummary1.substring(top, last));
          }
          summaryList[i] = last;
        }
      }
      // let first = defectsSummary1.substring(90, 180).indexOf(",") + 1;
      // pdf.text(12, 104, defectsSummary1.substring(0, 90 + first));
      // let second = defectsSummary1.substring(180, 270).indexOf(",") + 1;
      // pdf.text(12, 108, defectsSummary1.substring(90 + first, 180 + second));
      // let third = defectsSummary1.substring(270, 360).indexOf(",") + 1;
      // pdf.text(12, 112, defectsSummary1.substring(180 + second, 270 + third));
      // let fourth = defectsSummary1.substring(360, 450).indexOf(",") + 1;
      // pdf.text(12, 116, defectsSummary1.substring(270 + third, 360 + fourth));
      //
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.text(12, 128, "Main Defects:");
      //
      // let mainDefects = "Micelio, Incidencia Micelio, Pudrici";
      pdf.setFont("PoppinsRegular", "normal");
      pdf.text(12, 132, avg.mainDefects.split("，"));

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
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.setTextColor("black");
      pdf.text(12, ReportHeight + 12, "Typing By:");
      pdf.setFont("PoppinsRegular", "normal");
      pdf.text(12, ReportHeight + 16, detail.typingBy + "");
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.text(12, ReportHeight + 24, "Typing Temperature Recorder: ");
      pdf.setFont("PoppinsRegular", "normal");
      pdf.text(12, ReportHeight + 28, detail.temperatureRecorder + "");
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.text(12, ReportHeight + 36, "Package:");
      pdf.setFont("PoppinsRegular", "normal");
      pdf.text(12, ReportHeight + 40, detail.packageNote + "");
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.text(12, ReportHeight + 48, "Traceability:");
      pdf.setFont("PoppinsRegular", "normal");
      pdf.text(12, ReportHeight + 52, detail.traceAbility + "");
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.text(12, ReportHeight + 60, "Temperature:");
      pdf.setFont("PoppinsRegular", "normal");
      pdf.text(12, ReportHeight + 64, detail.temperature + "");
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.text(12, ReportHeight + 72, "Quality :");
      pdf.setFont("PoppinsRegular", "normal");
      pdf.text(12, ReportHeight + 76, detail.quality + "");
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.text(12, ReportHeight + 84, "Inspector Notes:");
      pdf.setFont("PoppinsRegular", "normal");
      pdf.text(12, ReportHeight + 88, detail.inspectorNote + "");
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
      pdf.setFont("PoppinsSemiBold", "bold");
      pdf.setTextColor("black");
      pdf.text("Pallets Summary List", 105, 16, null, null, "center");
      // 添加logo
      pdf.addImage(
        "./static/logo2.png",
        "PNG",
        170.47,
        10,
        29.53,
        14.34,
        "",
        "FAST"
      ); //x:210-10-29.53,y:10+12
      // 添加文字
      pdf.setFontSize(9);
      pdf.setFont("PoppinsRegular", "normal");

      let text5 = `Lot: ${detail.lot}– Product: ${detail.product} – ${detail.package} – Date: ${detail.date}
      `;
      pdf.text(15, 28, text5);
      // 从这里开始循环

      let PalletsSummaryList = [];
      for (let i = 0; i < allData.length; i++) {

        PalletsSummaryList[i] = {};
        PalletsSummaryList[i].title = "Pallet " + allData[i].pallet;
        if (parseInt(allData[i].sumOfTotalDefects) < 10) {
          PalletsSummaryList[i].score = "Excellent";
        } else if (parseInt(allData[i].sumOfTotalDefects) < 20) {
          PalletsSummaryList[i].score = "Good";
        } else if (parseInt(allData[i].sumOfTotalDefects) < 30) {
          PalletsSummaryList[i].score = "Fair";
        } else if (parseInt(allData[i].sumOfTotalDefects) < 41) {
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
          pdf.setFont("PoppinsSemiBold", "bold");
          pdf.setTextColor("black");
          pdf.text(15, 46 + 30 * (i / 3), PalletsSummaryList[i].score);
          pdf.setFillColor(scoreColor);
          pdf.rect(12, 42 + 30 * (i / 3), 2, 4, "F");
          pdf.setFont("PoppinsRegular", "normal");
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
          pdf.setFont("PoppinsSemiBold", "bold");
          pdf.setTextColor("black");
          pdf.text(
            79,
            46 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].score
          );
          pdf.setFillColor(scoreColor);
          pdf.rect(76, 42 + 30 * ((i - (i % 3)) / 3), 2, 4, "F");
          pdf.setFont("PoppinsRegular", "normal");
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
          pdf.setFont("PoppinsSemiBold", "bold");
          pdf.setTextColor("black");
          pdf.text(
            143,
            46 + 30 * ((i - (i % 3)) / 3),
            PalletsSummaryList[i].score
          );
          pdf.setFillColor(scoreColor);
          pdf.rect(140, 42 + 30 * ((i - (i % 3)) / 3), 2, 4, "F");
          pdf.setFont("PoppinsRegular", "normal");
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
          pdf.setFont("PoppinsSemiBold", "bold");
          pdf.setTextColor("black");
          pdf.text("Pallets and Samples Detail", 105, 16, null, null, "center");
          // 添加logo
          pdf.addImage(
            "./static/logo2.png",
            "PNG",
            170.47,
            10,
            29.53,
            14.34,
            "",
            "FAST"
          ); //x:210-10-29.53,y:10+12
          // 添加文字
          pdf.setFontSize(9);
          pdf.setFont("PoppinsRegular", "normal");

          pdf.text(text6, 105, 20, null, null, "center");
          // 添加背景
          pdf.setFillColor("#a2a2a2");
          pdf.rect(10, 30, 190, 11, "F");

          // 一列
          // 添加背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 42, 190, 6, "F");

          // finalScore
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Final Score", 25, 52, null, null, "right");
          // 一列
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 54, 190, 6, "F");

          // finalScore
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Main Defect", 25, 64, null, null, "right");
          // 数据

          pdf.text("Temp Avg", 25, 66, null, null, "right");

          pdf.text("Net Weight Avg", 25, 68, null, null, "right");

          // 一列
          // 填充背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 70, 190, 6, "F");

          // Cases Sample
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Cases Sample", 25, 80, null, null, "right");
          // 数据

          pdf.text("Sample Weight", 25, 82, null, null, "right");

          pdf.text("Samples Number", 25, 84, null, null, "right");

          pdf.text("20 Pieces Weight", 25, 86, null, null, "right");

          pdf.text("Sample Size", 25, 88, null, null, "right");

          pdf.text("Grower", 25, 90, null, null, "right");

          pdf.text("Block", 25, 92, null, null, "right");

          pdf.text("Variety", 25, 94, null, null, "right");

          pdf.text("Variety Code", 25, 96, null, null, "right");

          pdf.text("Packing Date", 25, 98, null, null, "right");

          pdf.text("Lote", 25, 100, null, null, "right");

          pdf.text("Label", 25, 102, null, null, "right");

          // 一列
          // 填充背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 104, 190, 6, "F");

          // Cases Sample
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Temperature", 25, 114, null, null, "right");

          pdf.text("Net Weight Avg", 25, 116, null, null, "right");

          pdf.text("Brix", 25, 118, null, null, "right");

          pdf.text("Baxlo Avg", 25, 120, null, null, "right");

          pdf.text("O2", 25, 122, null, null, "right");

          pdf.text("CO2", 25, 124, null, null, "right");

          // 一列
          // 填充背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 126, 190, 6, "F");

          // Cases Sample
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Foreign Body", 25, 136, null, null, "right");

          pdf.text("Contamination", 25, 138, null, null, "right");

          pdf.text("Size", 25, 140, null, null, "right");

          pdf.text("Misshapen", 25, 148, null, null, "right");

          pdf.text("Oversize", 25, 150, null, null, "right");

          pdf.text("Undersize", 25, 152, null, null, "right");

          pdf.text("Lack of Color", 25, 154, null, null, "right");

          pdf.text("Scars",25 , 156, null, null, "right");

          // 一列
          // 填充背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 158, 190, 6, "F");

          //
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Decay", 25, 166, null, null, "right");

          pdf.text("Mold", 25, 168, null, null, "right");

          // pdf.text("Mold Incidence", 25, 172, null, null, "right");

          // pdf.text("Mold Type", 25, 174, null, null, "right");

          pdf.text("Soft", 25, 170, null, null, "right");

          pdf.text("Sensitive", 25, 172, null, null, "right");

          pdf.text("Shriveling", 25, 174, null, null, "right");

          pdf.text("Dry Stem",25, 176, null, null, "right");
          
            pdf.text('No Stem', 25, 178, null, null, "right")

          pdf.text("Cracking", 25, 180, null, null, "right");

          pdf.text("Bruises", 25, 182, null, null, "right");

          pdf.text("Freezing Damage", 25, 184, null, null, "right");

          pdf.text("Pitting", 25, 186, null, null, "right");

          pdf.text("Russet", 25, 188, null, null, "right");

          pdf.text("Flavor Changed", 25, 190, null, null, "right");




          // pdf.text("BS WS CR", 25, 184, null, null, "right");
          if (allData[i].so2Damage !== '0.00%') {
            pdf.text("SO2 Damage", 25, 192, null, null, "right");
          }

          // pdf.text("Insect Presence", 25, 188, null, null, "right");

          // 一列
          // 填充背景
          pdf.setFontSize(8);
          pdf.setTextColor("white");
          pdf.setFillColor("#891735");
          pdf.rect(10, 192, 190, 6, "F");

          //
          pdf.setFontSize(6);
          pdf.setTextColor("black");
          pdf.text("Sum of Quality Defects", 25, 200, null, null, "right");

          pdf.text("Sum of Condition Defects", 25, 202, null, null, "right");

          pdf.text("Sum of Total Defects", 25, 204, null, null, "right");

          for (let j = 0; j < 4; j++) {
            if (i + j >= allData.length) break;
            // 添加文字
            pdf.setFontSize(8);
            pdf.setFont("PoppinsRegular", "normal");
            pdf.setTextColor("white");
            pdf.text(
              ["Pallet", allData[i + j].pallet],
              rowPosition[j],
              35,
              null,
              null,
              "center"
            );
            // 添加标题
            pdf.setFontSize(8);
            pdf.setTextColor("white");
            pdf.text("Sample 1", rowPosition[j], 46, null, null, "center");
            pdf.text("Overview", rowPosition[j], 58, null, null, "center");
            pdf.text("General", rowPosition[j], 74, null, null, "center");
            pdf.text("Other", rowPosition[j], 108, null, null, "center");
            pdf.text("Quality", rowPosition[j], 130, null, null, "center");
            pdf.text("Condition", rowPosition[j], 162, null, null, "center");
            pdf.text("Totals", rowPosition[j], 196, null, null, "center");
            // 添加数据
            pdf.setFontSize(6);
            pdf.setTextColor("black");
            pdf.text(
              allData[i + j].finalScore + "",
              rowPosition[j],
              52,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].mainDefect + "",
              rowPosition[j],
              64,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].tempAvg + "",
              rowPosition[j],
              66,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].netWeightAvg + "",
              rowPosition[j],
              68,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].casesSample + "",
              rowPosition[j],
              80,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].sampleWeight + "",
              rowPosition[j],
              82,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].samplesNumber + "",
              rowPosition[j],
              84,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].piecesWeight + "",
              rowPosition[j],
              86,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].sampleSize + "",
              rowPosition[j],
              88,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].grower + "",
              rowPosition[j],
              90,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].block + "",
              rowPosition[j],
              92,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].variety + "",
              rowPosition[j],
              94,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].varietyCode + "",
              rowPosition[j],
              96,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].packingDate + "",
              rowPosition[j],
              98,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].lote + "",
              rowPosition[j],
              100,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].label + "",
              rowPosition[j],
              102,
              null,
              null,
              "center"
            );

            pdf.text(
              allData[i + j].temperature + "",
              rowPosition[j],
              114,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].netWeightAvg + "",
              rowPosition[j],
              116,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].brix + "",
              rowPosition[j],
              118,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].baxloAvg + "",
              rowPosition[j],
              120,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].o2 + "",
              rowPosition[j],
              122,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].co2 + "",
              rowPosition[j],
              124,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].foreignBody + "",
              rowPosition[j],
              136,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].contamination + "",
              rowPosition[j],
              138,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].size + "",
              rowPosition[j],
              140,
              null,
              null,
              "center"
            );
    
            // pdf.text(
            //   allData[i + j].bloom + "",
            //   rowPosition[j],
            //   144,
            //   null,
            //   null,
            //   "center"
            // );

            pdf.text(
              allData[i + j].misshapen + "",
              rowPosition[j],
              148,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].oversize + "",
              rowPosition[j],
              150,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].underSize + "",
              rowPosition[j],
              152,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].lackOfColor + "",
              rowPosition[j],
              154,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].scars + "",
              rowPosition[j],
              156,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].decay + "",
              rowPosition[j],
              166,
              null,
              null,
              "center"
            );
            // pdf.text(
            //   allData[i + j].decayIncidence + "",
            //   rowPosition[j],
            //   168,
            //   null,
            //   null,
            //   "center"
            // );
            pdf.text(
              allData[i + j].mold + "",
              rowPosition[j],
              168,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].soft + "",
              rowPosition[j],
              170,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].sensitive + "",
              rowPosition[j],
              172,
              null,
              null,
              "center"
            );

            pdf.text(
              allData[i + j].shriveling + "",
              rowPosition[j],
              174,
              null,
              null,
              "center"
            );
            
            pdf.text(
              allData[i + j].dryStem + "",
              rowPosition[j],
              176,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].noStem + "",
              rowPosition[j],
              178,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].cracking + "",
              rowPosition[j],
              180,
              null,
              null,
              "center"
            )
            pdf.text(
              allData[i + j].bruises + "",
              rowPosition[j],
              182,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].freezingDamage + "",
              rowPosition[j],
              184,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].pitting + "",
              rowPosition[j],
              186,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].russet + "",
              rowPosition[j],
              188,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].flavorChanged + "",
              rowPosition[j],
              190,
              null,
              null,
              "center"
            );




            if (allData[i + j].so2Damage !== '0.00%') {
              pdf.text(
                allData[i + j].so2Damage + "",
                rowPosition[j],
                192,
                null,
                null,
                "center"
              );
            }

            pdf.text(
              allData[i + j].sumOfQualityDefects + "",
              rowPosition[j],
              200,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].sumOfConditionDefects + "",
              rowPosition[j],
              202,
              null,
              null,
              "center"
            );
            pdf.text(
              allData[i + j].sumOfTotalDefects + "",
              rowPosition[j],
              204,
              null,
              null,
              "center"
            );
          }
        }
      }

      // 详情数据页面 （竖）

      pdf.addPage([850, 450], "1");
      var generateData = function (amount) {
        var result = [];
        for (var i = 0; i < amount; i += 1) {
          var data = {
            pallet: allData[i].pallet + "",
            "Pallet Score": allData[i].palletScore + "",
            "Sample Score": allData[i].sampleScore + "",
            "Final Score": allData[i].finalScore + "",
            "Main Defect": allData[i].mainDefect + "",
            "Net Weight Avg": allData[i].netWeightAvg + "",
            "Cases Sample": allData[i].casesSample + "",
            "Sample Weight": allData[i].sampleWeight + "",
            "Samples Number": allData[i].samplesNumber + "",
            "20 Pieces Weight": allData[i].piecesWeight + "",
            "Sample Size": allData[i].sampleSize + "",
            Grower: allData[i].grower + "",
            Block: allData[i].block + "",
            Variety: allData[i].variety + "",
            "Packing Date": allData[i].packingDate + "",
            Lote: allData[i].lote + "",
            Label: allData[i].label + "",
            Brix: allData[i].brix + "",
            "Baxlo Avg": allData[i].baxloAvg + "",
            "Foreign Body": allData[i].foreignBody + "",
            Contamination: allData[i].contamination + "",
            Size: allData[i].size + "",
            // Bloom: allData[i].bloom + "",
            // "RS NB AS FR": allData[i].rsnbasfr + "",
            Misshapen: allData[i].misshapen + "",
            Undersize: allData[i].underSize + "",
            Decay: allData[i].decay + "",
            // "Decay Incidence": allData[i].decayIncidence + "",
            Mold: allData[i].mold + "",
            // "Mold Incidence": allData[i].moldIncidence + "",
            // "Mold Type": allData[i].moldType + "",
            Soft: allData[i].soft + "",
            Sensitive: allData[i].sensitive + "",
            Shriveling: allData[i].shriveling + "",
            "Dry Stem": allData[i].dryStem + "",
            "No Stem": allData[i].noStem + "",
            "Cracking": allData[i].cracking + "",
            "Bruises": allData[i].bruises + "",
            "Freezing Damage": allData[i].freezingDamage + "",
            "Pitting": allData[i].pitting + "",
            "Russet": allData[i].russet + "",
            "Flavor Changed": allData[i].flavorChanged + "",
            Scars: allData[i].scars + "",
            // "Pedicelar Sunken": allData[i].pedicelarSunken + "",
            // "BS WS CR": allData[i].bswscr + "",
            // "SO2 Damage": allData[i].so2Damage + "",
            // "Insect Presence": allData[i].insectPresence + "",
            "Sum of Quality Defects": allData[i].sumOfQualityDefects + "",
            "Sum of Condition Defects": allData[i].sumOfConditionDefects + "",
            "Sum of Total Defects": allData[i].sumOfTotalDefects + "",
          };
          if (allData[i].so2Damage != "0.00%") {
            data["SO2 Damage"] = allData[i].so2Damage + "";
          }


          result.push(Object.assign({}, data));
        }

        return result;
      };
      // 定义动态表头
      const autoHeader = {
        "pallet": "pallet",
        "Pallet Score": 'palletScore',
        "Sample Score": 'sampleScore',
        "Final Score": "finalScore",
        "Main Defect": "mainDefect",
        "Net Weight Avg": "netWeightAvg",
        "Cases Sample": "casesSample",
        "Sample Weight": "sampleWeight",
        "Samples Number": "samplesNumber",
        "20 Pieces Weight": "piecesWeight",
        "Sample Size": "sampleSize",
        "Grower": "grower",
        "Block": "block",
        "Variety": "variety",
        "Packing Date": "packingDate",
        "Lote": "lote",
        "Label": "label",
        "Brix": "brix",
        "Baxlo Avg": "baxloAvg",
        "Foreign Body": "foreignBody",
        "Contamination": "contamination",
        "Size": "size",
        // "Bloom": "bloom",
        "RS NB AS FR": "rsnbasfr",
        "Misshapen": "misshapen",
        "Undersize": "underSize",
        "Decay": "decay",
        // "Decay Incidence": "decayIncidence",
        "Mold": "mold",
        // "Mold Incidence": "moldIncidence",
        // "Mold Type": "moldType",
        "Soft": "soft",
        "Sensitive": "sensitive",
        "Shriveling": "shriveling",
        "Scars": "scars",
        // "Pedicelar Sunken": "pedicelarSunken",
        "BS WS CR": "bswscr",
        "SO2 Damage": "so2Damage",
        // "Insect Presence": "insectPresence",
        "Sum of Quality Defects": "sumOfQualityDefects",
        "Sum of Condition Defects": "sumOfConditionDefects",
        "Sum of Total Defects": "sumOfTotalDefects",
      }
      function createHeaders(keys) {
        var result = [];
        for (var i = 0; i < keys.length; i += 1) {
          result.push({
            id: keys[i],
            name: keys[i],
            prompt: keys[i],
            width: 60,
            align: "center",
            padding: 0,
          });
        }
        return result;
      }
      if (allData.every(x => x.so2Damage == "0.00%")) {
        var headers = createHeaders([
          "pallet",
          "Pallet Score",
          "Sample Score",
          "Final Score",
          "Main Defect",
          "Net Weight Avg",
          "Cases Sample",
          "Sample Weight",
          "Samples Number",
          "20 Pieces Weight",
          "Sample Size",
          "Grower",
          "Block",
          "Variety",
          "Packing Date",
          "Lote",
          "Label",
          "Brix",
          "Baxlo Avg",
          "Foreign Body",
          "Contamination",
          "Size",
          // "Bloom",
          // "RS NB AS FR",
          "Misshapen",
          "Undersize",
          "Decay",
          // "Decay Incidence",
          "Mold",
          // "Mold Incidence",
          // "Mold Type",
          "Soft",
          "Sensitive",
          "Shriveling",
          "Dry Stem",
          "No Stem",
          "Scars",
          "Cracking",
          "Bruises",
          "Freezing Damage",
          "Pitting",
          "Russet",
          "Flavor Changed",
          // "Pedicelar Sunken",
          // "BS WS CR",
          // "Insect Presence",
          "Sum of Quality Defects",
          "Sum of Condition Defects",
          "Sum of Total Defects",
        ]);
      } else {
        var headers = createHeaders([
          "pallet",
          "Pallet Score",
          "Sample Score",
          "Final Score",
          "Main Defect",
          "Net Weight Avg",
          "Cases Sample",
          "Sample Weight",
          "Samples Number",
          "20 Pieces Weight",
          "Sample Size",
          "Grower",
          "Block",
          "Variety",
          "Packing Date",
          "Lote",
          "Label",
          "Brix",
          "Baxlo Avg",
          "Foreign Body",
          "Contamination",
          "Size",
          // "Bloom",
          // "RS NB AS FR",
          "Misshapen",
          "Undersize",
          "Decay",
          // "Decay Incidence",
          "Mold",
          // "Mold Incidence",
          // "Mold Type",
          "Soft",
          "Sensitive",
          "Shriveling",
          "Dry Stem",
          "No Stem",
          "Scars",
          "Cracking",
          "Bruises",
          "Freezing Damage",
          "Pitting",
          "Russet",
          "Flavor Changed",
          "SO2 Damage",
          // "Insect Presence",
          "Sum of Quality Defects",
          "Sum of Condition Defects",
          "Sum of Total Defects",
        ]);
      }




      pdf.table(10, 10, generateData(allData.length), headers, {
        autoSize: true,
        fontSize: 6,
        headerBackgroundColor: "#891735",
        headerTextColor: "#ffffff",
      });
      //图片
      if (imgList.length !== 0) {
        // 新增页面
        pdf.addPage([210, 32 + 70 * Math.ceil(imgList.length / 3)], "1");
        // 标题
        pdf.setFontSize(16);
        pdf.setFont("PoppinsSemiBold", "bold");
        pdf.setTextColor("black");
        pdf.text("Images", 105, 16, null, null, "center");
        // 添加logo
        pdf.addImage(
          "./static/logo2.png",
          "PNG",
          170.47,
          10,
          29.53,
          14.34,
          "",
          "FAST"
        ); //x:210-10-29.53,y:10+12
        // 添加文字
        pdf.setFontSize(9);
        pdf.setFont("PoppinsRegular", "normal");

        let text8 = `Lot: ${detail.lot}– ${detail.product} – ${detail.package} – ${detail.date}
    `;
        pdf.text(15, 28, text8);

        // 添加图片
        let imgAddNum = 0;
        for (let i = 0; i < imgList.length; i++) {
          // 每列第一张
          let img_url = imgList[i].imgSrc;
          let img = new Image();
          img.src = img_url;

          img.onload = function () {
            let imgWidth = img.width;
            let imgHeight = img.height;
            if (imgWidth >= imgHeight && imgWidth > 61) {
              imgHeight = (imgHeight * 61) / imgWidth;
              imgWidth = 61;
            } else if (imgHeight > imgWidth && imgHeight > 61) {
              imgWidth = (imgWidth * 61) / imgHeight;
              imgHeight = 61;
            }

            if (i % 3 === 0) {
              // 添加图片
              pdf.addImage(
                img.src,
                "jpg",
                15 + 61 / 2 - imgWidth / 2,
                32 + 69 * ((i - (i % 3)) / 3) + 61 / 2 - imgHeight / 2,
                imgWidth,
                imgHeight,
                "",
                "FAST"
              );
              // 填充背景
              pdf.setFillColor("#891735");
              pdf.rect(15, 94 + 69 * ((i - (i % 3)) / 3), 61, 6, "F");
              pdf.setFontSize(8);
              pdf.setTextColor("white");
              pdf.text(
                "General |",
                45.5,
                98 + 69 * ((i - (i % 3)) / 3),
                null,
                null,
                "center"
              );
              // pdf.save("qysw.pdf");
            } else if (i % 3 === 1) {
              // 添加图片
              pdf.addImage(
                img.src,
                "jpg",
                77 + 61 / 2 - imgWidth / 2,
                32 + 69 * ((i - (i % 3)) / 3) + 61 / 2 - imgHeight / 2,
                imgWidth,
                imgHeight,
                "",
                "FAST"
              );
              // 填充背景
              pdf.setFillColor("#891735");
              pdf.rect(77, 94 + 69 * ((i - (i % 3)) / 3), 61, 6, "F");
              pdf.setFontSize(8);
              pdf.setTextColor("white");
              pdf.text(
                "General |",
                107.5,
                98 + 69 * ((i - (i % 3)) / 3),
                null,
                null,
                "center"
              );
            } else if (i % 3 === 2) {
              // 添加图片
              pdf.addImage(
                img.src,
                "jpg",
                139 + 61 / 2 - imgWidth / 2,
                32 + 69 * ((i - (i % 3)) / 3) + 61 / 2 - imgHeight / 2,
                imgWidth,
                imgHeight,
                "",
                "FAST"
              );
              // 填充背景
              pdf.setFillColor("#891735");
              pdf.rect(139, 94 + 69 * ((i - (i % 3)) / 3), 61, 6, "F");
              pdf.setFontSize(8);
              pdf.setTextColor("white");
              pdf.text(
                "General |",
                169.5,
                98 + 69 * ((i - (i % 3)) / 3),
                null,
                null,
                "center"
              );
            }
            imgAddNum++;
            if (imgAddNum === imgList.length) {
              pdf.save("SVA.pdf");
            }
          };
        }
      } else {
        pdf.save("SVA.pdf");
      }
      // pdf.save("SVA.pdf");
    };
  },
};
