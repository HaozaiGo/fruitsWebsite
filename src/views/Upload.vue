<template>
  <div
    class="upload"
    :style="{
      width: $store.state.showMenu === true ? '100%' : 'calc(100% - 181px)',
    }"
  >
    <div class="uploadExecBox">
      <div class="uploadHeader">{{ $t("upload.uploadData") }}</div>
      <div class="uploadExec">
        <input
          type="file"
          ref="fileInput"
          class="fileInput"
          @change="getUploadFile"
        />
        <el-button
          slot="trigger"
          size="small"
          type="primary"
          @click="fileInputClick()"
          >{{ $t("upload.selectFile") }}</el-button
        >

        <div slot="tip" class="el-upload__tip">
          {{ $t("upload.xlsx") }}
        </div>
        <div v-if="filename">
          <p class="show"><i class="el-icon-document"></i> {{ filename }}</p>
          <div class="progress" :style="{ width: progress }"></div>
        </div>
      </div>
    </div>
    <div class="uploadImagesBox">
      <div class="uploadHeader">{{ $t("upload.uploadImage") }}</div>
      <div class="uploadImages">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item :label="$t('upload.lot')">
            <el-select
              v-model="value"
              :placeholder="$t('upload.pleaseChoose')"
              size="small"
            >
              <el-option
                v-for="(item, index) in options"
                :key="item.index"
                :label="index + 1 + '、' + item.lot"
                :value="item.containerId"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('upload.images')">
            <el-upload
              class="upload-demo"
              drag
              action="#"
              :http-request="(params) => uploadImage(params)"
              multiple
              :file-list="fileList"
              :before-upload="handleBeforeUpload"
              :on-progress="handleProgress"
              ref="uploadImg"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                {{ $t("upload.uploadTip")
                }}<em> {{ $t("upload.clickUpload") }}</em>
              </div>
              <div class="el-upload__tip" slot="tip">
                {{ $t("upload.png") }}
              </div>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="progressImage" v-if="isUpload">
      <div class="progressBox">
        <el-progress
          :percentage="imageUploadProgress"
          :format="format"
          color="#409eff"
        ></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import XLSX from "xlsx";
import moment from "moment";
import * as imageConversion from "image-conversion";
export default {
  data() {
    return {
      form: {
        Lot: "",
      },
      options: [],
      value: "",
      uploadType: {
        // 集装箱数据
        lotData: {
          lot: "LOT",
          company: "Company Name",
          shipperConsignee: "Shipper Name",
          location: "Location Name",
          product: "Product Name",
          package: "Service Name",
          productType: "Product Type",
          reference: "Reference Code",
          carrierType: "Carrier Type",
          carrier: "Carrier",
          date: "Inspection Date",
          warehouse: "Warehouse",
          arrivalDate: "Arrival Date",
          warehouseDate: "Warehouse Date",
          vessel: "Vessel",
          cases: "Cases",
          fumigation: "Fumigation",
          inspectionType: "Inspection Type",
          inspection: "Inspector",
          country: "Country",
          organic: "Organic",
          typingBy: "Typing By",
          temperatureRecorder: "Temperature Recorder",
          packageNote: "Package",
          traceAbility: "Traceability",
          temperature: "Temperature_Note",
          quality: "Quality",
          inspectorNote: "Inspector Notes",
        },
        // 托盘数据
        palletData: {
          pallet: "LOT ID",
          palletScore: "Pallet Score",
          openAppearance: "Open Appearance",
          palletGallery: "Pallet Gallery",
          sampleScore: "Sample Score",
          sampleGallery: "Sample Gallery",
          finalScore: "Final Score",
          mainDefect: "Main Defect",
          tempAvg: "Temp Avg",
          netWeightAvg: "Net Weight Avg",
          casesSample: "Cases Sample",
          sampleWeight: "Sample Weight",
          samplesNumber: "Sample Number",
          piecesWeight: "20 Pieces Weight",
          sampleSize: "Sample Size",
          grower: "Grower",
          block: "Block",
          variety: "Variety",
          varietyCode: "Variety Code",
          packingDate: "Packing Date",
          lote: "Lote",
          label: "Label",
          temperature: "Temperature",
          brix: "Brix",
          baxloAvg: "Baxlo Avg",
          o2: "O2",
          co2: "CO2",
          foreignBody: "Foreign Body",
          contamination: "Contamination",
          size: "Size",
          consistency: "Consistency",
          bloom: "Bloom",
          rsnbasfr: "RS NB AS FR",
          misshapen: "Misshapen",
          noStem: "No Stem",
          oversize: "Oversize",
          underSize: "Undersize",
          lackOfColor: "Lack of Color",
          decay: "Decay",
          decayIncidence: "Decay Incidence",
          mold: "Mold",
          moldIncidence: "Mold Incidence",
          moldType: "Mold Type",
          soft: "Soft",
          sensitive: "Sensitive",
          shriveling: "Shriveling",
          pedicelarSunken: "Pedicelar Sunken",
          vswscr: "BS WS CR",
          so2Damage: "SO2 Damage",
          insectPresence: "Insect Presence",
          sumOfQualityDefects: "Sum of Quality Defects",
          sumOfConditionDefects: "Sum of Condition Defects",
          sumOfTotalDefects: "Sum of Total Defects",
          groundColorGreen: "Ground Color Green",
          groundColorTurning: "Ground Color Turning",
          groundColorYellow: "Ground Color Yellow",
          missize: "Missize",
          russet: "Russet",
          scars: "Scar",
          sunBurn: "Sun Burn",
          lenticelBreakdown: "Lenticel Breakdown",
          mechanicalDamage: "Mechanical Damage",
          wounds: "Wounds",
          bruises: "Bruises",
          bitterPit: "Bitter Pit",
          cork: "Cork",
          scald: "Scald",
          insectDamage: "Insect Damage",
          discoloration: "Discoloration",
          puncture: "Puncture",
          freezingDamage: "Freezing Damage",
          hailDamage: "Hail Damage",
          waterCore: "Water Core",
          internalBreakdown: "Internal Breakdown",
          cracking: "Cracking",
          braeburnMark: "Braeburn Mark",
          coreRot: "Core Rot",
          firmRipe: "Firm Ripe",
          internalBrowning: "Internal Browning",
          pitting: "Pitting",
          dryStem: "Dry Stem",
          flavorChanged: "Flavor Changed",
        },
      },
      filename: "",
      progress: "0%",
      LotList: [],
      fileList: [],
      neenLoad: 0,
      imageUploadProgress: 0,
      isUpload: false,
      loadList: [],
      imgList: [],
      conversionImgList: [],
    };
  },
  computed: {
    postUrl() {
      return `${process.env.VUE_APP_URL}/api/container/${this.value}/picture`;
    },
  },
  created() {
    this.getLotContainer();
  },
  methods: {
    fileInputClick() {
      this.$refs.fileInput.click();
    },
    getUploadFile(e) {
      this.filename = e.target.files[0].name;
      this.readXLSX(e.target.files[0]);
    },
    // 读取xlsx
    readXLSX(file) {
      let that = this;
      let nameSplit = file.name.split(".");
      let format = nameSplit[nameSplit.length - 1];
      if (!["xlsx", "csv", "xls"].includes(format)) {
        return false;
      }
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsBinaryString(file);
        let total = file.size;
        reader.onprogress = function(e) {
          that.progress = (e.loaded / total) * 100 + "%";
        };
        reader.onload = (evt) => {
          let data = evt.target.result; // 读到的数据
          let workbook = XLSX.read(data, { type: "binary", cellDates: true });
          this.conversionData(workbook, file);
          resolve(workbook);
        };
      });
    },

    // 读取xlxs的数据保存到数据库
    conversionData(data, file) {
      let XLSXData = XLSX.utils.sheet_to_json(data.Sheets[data.SheetNames[0]]);
      // 集装箱数据
      let lotData = {};
      // 托盘数据
      let uploadData = [];
      // 集装箱数据
      for (let key in this.uploadType.lotData) {
        lotData[key] = XLSXData[0][this.uploadType.lotData[key]];

        if (
          key === "date" ||
          key === "arrivalDate" ||
          key === "warehouseDate"
        ) {
          lotData[key] = moment(lotData[key])
            .add(1, "d")
            .format("YYYY-MM-DD");
          if (lotData[key] === "Invalid date") {
            continue;
          }
        }
      }

      // 托盘数据
      for (let i = 0; i < XLSXData.length; i++) {
        uploadData[i] = {};
        for (let key in this.uploadType.palletData) {
          uploadData[i][key] = XLSXData[i][this.uploadType.palletData[key]];
          if (key === "packingDate") {
            console.log(uploadData[i][key]);
            uploadData[i][key] = moment(uploadData[i][key])
              .add(1, "d")
              .format("YYYY-MM-DD");
            if (uploadData[i][key] === "Invalid date") {
              continue;
            }
          }
        }
      }
      // 上传集装箱数据

      this.axios
        .post(`${process.env.VUE_APP_URL}/api/container`, lotData, {
          headers: {
            Authorization: window.sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          let conainterID = res.data.data;
          // 上传文件
          this.uploadXLSX(file, conainterID);
          // 上传托盘数据

          this.axios
            .post(
              `${process.env.VUE_APP_URL}/api/fruitBox?containerId=${conainterID}`,
              { fruitBoxList: uploadData },
              {
                headers: {
                  Authorization: window.sessionStorage.getItem("token"),
                },
              }
            )
            .then((res) => {
              this.$message({
                showClose: true,
                message: "数据添加成功",
                type: "success",
              });
              this.filename = "";
              this.progress = 0;
              this.getLotContainer();
            });
        });
    },

    // 上传xlsx
    uploadXLSX(file, containerId) {
      this.axios
        .post(
          `${process.env.VUE_APP_URL}/api/container/${containerId}/excel`,
          {
            file: file,
          },
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          // console.log(res);
        });
    },

    // 获取图片列表
    getLotContainer() {
      // 获取总数量
      this.axios
        .get(`${process.env.VUE_APP_URL}/api/qc/container?page=1&size=1000`, {
          headers: {
            Authorization: window.sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data.data.count === 0) return;
          if (res.data.data.count > 1000) {
            this.axios
              .get(
                `${process.env.VUE_APP_URL}/api/qc/container?page=1&size=${res.data.data.count}`,
                {
                  headers: {
                    Authorization: window.sessionStorage.getItem("token"),
                  },
                }
              )
              .then((res) => {
                let LotData = res.data.data.containers;
                this.options = [];
                for (let i = 0; i < LotData.length; i++) {
                  this.options[i] = {
                    lot: LotData[i].lot,
                    containerId: LotData[i].containerId,
                  };
                }
                this.value = LotData[0].containerId;
              });
          } else {
            let LotData = res.data.data.containers;

            this.options = [];
            for (let i = 0; i < LotData.length; i++) {
              this.options[i] = {
                lot: LotData[i].lot,
                containerId: LotData[i].containerId,
              };
            }
            this.value = this.options[0].containerId;
          }
        });
    },
    // 更新containerId
    // containerIdChange() {
    //   this.posterUrl = `${process.env.VUE_APP_URL}/api/container/${this.value}/picture`;
    // },
    handleSuccess(response, file, fileList) {
      this.$success("上传成功");
    },
    handleError() {
      this.$error("上传失败,请重新上传图片!");
    },
    handleProgress(event, file, fileList) {
      this.loading = true; //  上传时执行loading事件
    },
    // 上传前
    handleBeforeUpload(file) {
      this.neenLoad++;
    },
    // 上传图片
    uploadImage(params) {
      this.imgList.push(params.file);
      setTimeout(() => {
        this.isUpload = true;
        // 判断是否上传的是pdf
        // if (params.file.type === "application/pdf" && this.neenLoad === 1) {
        //   this.uploadPdfFn(params.file);
        // } else {
        // 上传的是图片
        // 先压缩图片
        if (
          params.file.size > 1024 * 1024 &&
          params.file.type !== "application/pdf"
        ) {
          imageConversion
            .compressAccurately(params.file, {
              size: 1024,
              type: "image/jpeg",
            })
            .then((res) => {
              let time1 = Date.parse(new Date());
              let files = new File([res], params.file.name, {
                type: params.file.type,
              });
              for (let i = 0; i < this.imgList.length; i++) {
                if (this.imgList[i].name === files.name) {
                  this.imgList[i] = files;
                }
              }

              this.conversionImgList.push(files);
              if (this.conversionImgList.length === this.neenLoad) {
                // 判断是图片还是pdf
                if (this.imgList[0].type === "application/pdf") {
                  this.uploadPdfFn(this.imgList[0]);
                } else {
                  this.uploadImgFn(this.imgList[0]);
                }
              }
            });
        } else {
          this.conversionImgList.push(params.file);
          if (this.conversionImgList.length === this.neenLoad) {
            // 判断是图片还是pdf
            if (this.imgList[0].type === "application/pdf") {
              this.uploadPdfFn(this.imgList[0]);
            } else {
              this.uploadImgFn(this.imgList[0]);
            }
          }
        }
        // }
      }, 0);
    },
    axiosImage() {
      // let that = this;
      // this.loadList[this.loadList.length] = {
      //   filename: file.name,
      //   progress: 0,
      // };
      // this.axios
      //   .post(
      //     `${process.env.VUE_APP_URL}/api/container/${this.value}/picture`,
      //     {
      //       picture: file,
      //     },
      //     {
      //       headers: {
      //         Authorization: window.sessionStorage.getItem("token"),
      //         "Content-Type": "multipart/form-data",
      //       },
      //       onUploadProgress: function(progressEvent) {
      //         const complete = parseInt(
      //           ((progressEvent.loaded / progressEvent.total) * 100) | 0
      //         );
      //         // 这里为上传的进度
      //         let sumProgress = 0;
      //         for (let i = 0; i < that.loadList.length; i++) {
      //           if (that.loadList[i].filename === file.name) {
      //             that.loadList[i].progress = complete;
      //           }
      //           sumProgress += that.loadList[i].progress;
      //         }
      //         that.imageUploadProgress = parseInt(
      //           sumProgress / that.loadList.length
      //         );
      //       },
      //     }
      //   )
      //   .then((res) => {
      //     this.neenLoad--;
      //     if (this.neenLoad === 0) {
      //       this.$refs.uploadImg.clearFiles();
      //       this.$message({
      //         showClose: true,
      //         message: "图片/pdf文件添加成功",
      //         type: "success",
      //       });
      //       this.isUpload = false;
      //       that.imageUploadProgress = 0;
      //       this.loadList = [];
      //     }
      //   });
    },
    uploadImgFn(file) {
      this.axios
        .post(
          `${process.env.VUE_APP_URL}/api/container/${this.value}/picture`,
          {
            picture: file,
          },
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          this.neenLoad--;
          if (this.neenLoad <= 0) {
            this.$refs.uploadImg.clearFiles();
            this.$message({
              showClose: true,
              message: "图片/pdf文件添加成功",
              type: "success",
            });
            this.isUpload = false;
            this.imgList = [];
            this.conversionImgList = [];
            this.imageUploadProgress = 0;
          } else {
            // 继续上传
            // 判断是图片还是pdf
            if (
              this.imgList[this.imgList.length - this.neenLoad].type ===
              "application/pdf"
            ) {
              this.uploadPdfFn(
                this.imgList[this.imgList.length - this.neenLoad]
              );
            } else {
              this.uploadImgFn(
                this.imgList[this.imgList.length - this.neenLoad]
              );
            }

            this.imageUploadProgress =
              ((this.imgList.length - this.neenLoad) / this.imgList.length) *
              100;
          }
        });
    },
    uploadPdfFn(file) {
      this.axios
        .post(
          `${process.env.VUE_APP_URL}/api/container/${this.value}/pdf`,
          {
            picture: file,
          },
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          this.neenLoad--;
          if (this.neenLoad <= 0) {
            this.$refs.uploadImg.clearFiles();
            this.$message({
              showClose: true,
              message: "图片/pdf文件添加成功",
              type: "success",
            });
            this.isUpload = false;
            this.imgList = [];
            this.conversionImgList = [];
            this.imageUploadProgress = 0;
          } else {
            // 继续上传
            // 判断是图片还是pdf
            if (
              this.imgList[this.imgList.length - this.neenLoad].type ===
              "application/pdf"
            ) {
              this.uploadPdfFn(
                this.imgList[this.imgList.length - this.neenLoad]
              );
            } else {
              this.uploadImgFn(
                this.imgList[this.imgList.length - this.neenLoad]
              );
            }
            this.imageUploadProgress =
              ((this.imgList.length - this.neenLoad) / this.imgList.length) *
              100;
          }
        });
    },
    format(percentage) {
      return this.imgList.length - this.neenLoad <= 0
        ? `图片压缩中： ${this.conversionImgList.length}/${this.neenLoad}`
        : `图片上传中： ${this.imgList.length - this.neenLoad}/${
            this.imgList.length
          }`;
    },
    axiosPdf(file) {
      let that = this;
      this.loadList[this.loadList.length] = {
        filename: file.name,
        progress: 0,
      };
      this.axios
        .post(
          `${process.env.VUE_APP_URL}/api/container/${this.value}/pdf`,
          {
            picture: file,
          },
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: function(progressEvent) {
              const complete = parseInt(
                ((progressEvent.loaded / progressEvent.total) * 100) | 0
              );
              // 这里为上传的进度
              let sumProgress = 0;
              for (let i = 0; i < that.loadList.length; i++) {
                if (that.loadList[i].filename === file.name) {
                  that.loadList[i].progress = complete;
                }
                sumProgress += that.loadList[i].progress;
              }
              that.imageUploadProgress = parseInt(
                sumProgress / that.loadList.length
              );
            },
          }
        )
        .then((res) => {
          this.neenLoad--;
          if (this.neenLoad === 0) {
            this.$refs.uploadImg.clearFiles();
            this.$message({
              showClose: true,
              message: "图片/pdf文件添加成功",
              type: "success",
            });
            this.isUpload = false;
            that.imageUploadProgress = 0;
            this.loadList = [];
          }
        });
    },
  },
};
</script>

<style lang="less">
.upload {
  width: calc(100% - 181px);
  height: calc(100% - 57px);
  float: right;
  background-color: #f1f3f6;
  padding: 40px;
  overflow: auto;
  transition: all 0.5s;
  background-image: url(../assets/linea_tiempo_fondo-2.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  .el-upload__tip {
    font-family: Poppins-Regular;
  }
  .uploadExecBox {
    width: 100%;
    background-color: #fff;
    min-width: 880px;
    margin-bottom: 28px;
    position: relative;
    background-image: url(../assets/fondo_marcas2.png),
      url("../assets/fondo_marcas3.png");
    background-position: left center, right, center;
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    .uploadHeader {
      height: 35px;
      width: 100%;
      padding-left: 8px;
      display: flex;
      align-items: center;
      justify-content: left;
      border-bottom: 1px solid #ddd;
      font-size: 12px;
      font-weight: 700;
      color: #333;
      position: relative;
      font-family: Poppins-Bold;
    }
    .uploadExec {
      padding: 18px 23px 40px;
      .show {
        margin-top: 10px;
        color: #606266;
        display: block;
        margin-right: 40px;
        overflow: hidden;
        padding-left: 4px;
        text-overflow: ellipsis;
        transition: color 0.3s;
        white-space: nowrap;
        font-size: 12px;
      }
      span {
        font-family: Poppins-Regular;
      }
    }
    .fileInput {
      position: absolute;
      left: -100%;
    }
    .progress {
      width: 0%;
      height: 2px;
      background-color: #409eff;
      border-radius: 5px;
      transition: all 0.5s;
    }
  }
  .uploadImagesBox {
    width: 100%;
    background-color: #fff;
    min-width: 880px;
    position: relative;
    background-image: url(../assets/fondo_marcas4.png),
      url("../assets/fondo_marcas5.png");
    background-position: left center, right, center;
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    .uploadHeader {
      height: 35px;
      width: 100%;
      padding-left: 8px;
      display: flex;
      align-items: center;
      justify-content: left;
      border-bottom: 1px solid #ddd;
      font-size: 12px;
      font-weight: 700;
      color: #333;
      position: relative;
      font-family: Poppins-Bold;
    }
    .uploadImages {
      padding: 18px 23px 40px;
      .el-form-item__label,
      input,
      .el-upload__text,
      em {
        font-family: Poppins-Regular;
      }
    }
  }
  .progressImage {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    z-index: 999;
    .progressBox {
      width: 80%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
    }
    .el-progress__text {
      color: #fff;
    }
  }
}
.el-progress-bar {
  width: calc(100% - 120px);
}
</style>
