<template>
  <div class="addNews">
    <div class="addNewsHeader">{{ $t("navLeft.AddGoods") }}</div>
    <div class="addNewsForm">
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item :label="$t('goods.category')">
          <el-autocomplete v-model="form.category" :fetch-suggestions="querySearchAsync"
            :placeholder="$t('goods.placeholderCategory')"></el-autocomplete>
        </el-form-item>
        <el-form-item :label="$t('goods.cover')">
          <el-upload class="avatar-uploader" action="#" :show-file-list="false" :before-upload="beforeAvatarUpload"
            :http-request="(params) => httpRequestImageCover(params)">
            <img v-if="form.cover" :src="form.cover" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item :label="$t('goods.title')">
          <el-input v-model="form.title" :placeholder="$t('goods.placeholderTitle')" class="articleTitle"></el-input>
          <el-input v-model="form.translations[0].title" class="articleTitle"
            :placeholder="$t('goods.placeholderTraTips')" style="margin-left: 10px;">

          </el-input>
        </el-form-item>
        <el-form-item :label="$t('goods.summary')">
          <el-input v-model="form.summary" :placeholder="$t('goods.placeholderSummary')" class="articleTitle"></el-input>
          <el-input v-model="form.translations[0].summary" class="articleTitle"
            :placeholder="$t('goods.placeholderTraTips')" style="margin-left: 10px;" />
        </el-form-item>
        <el-form-item :label="$t('goods.belongCompany')">
          <el-input v-model="form.belongCompany" :placeholder="$t('goods.placeholderBelongCompany')"
            class="articleTitle"></el-input>
          <el-input v-model="form.translations[0].belongCompany" class="articleTitle"
            :placeholder="$t('goods.placeholderTraTips')" style="margin-left: 10px;" />
        </el-form-item>
        <el-form-item :label="$t('goods.price')">
          <el-input v-model="form.price" :placeholder="$t('goods.placeholderPrice')" class="articleTitle"
            type="number"></el-input>
        </el-form-item>
        <el-form-item :label="$t('goods.monthlySales')">
          <el-input v-model="form.monthlySales" :placeholder="$t('goods.placeholderMonthlySales')" class="articleTitle"
            type="number"></el-input>
        </el-form-item>
        <el-form-item :label="$t('goods.transportation')">
          <el-input v-model="form.logisticsMethod" :placeholder="$t('goods.placeholderTransportation')"
            class="articleTitle"></el-input>
        </el-form-item>


        <template v-for="(item, index) in form.article">
          <el-form-item :label="$t('news.paragraph')" :key="index" v-if="item.type === 'text'">
            <el-input type="textarea" v-model="form.article[index].content" class="articleContent"></el-input>
            <el-input type="textarea" v-model="form.translations[0].introduction[index].content" class="articleContent"
              style="margin-top: 10px;" :placeholder="$t('goods.placeholderTraTips')"></el-input>
            <el-button type="danger" icon="el-icon-delete" circle class="deleteButton"
              @click="deletAddNews(index)"></el-button>
          </el-form-item>
          <el-form-item :label="$t('news.illustrations')" :key="index" v-else-if="item.type === 'image'">
            <el-upload class="avatar-uploader" action="#" :show-file-list="false" :before-upload="beforeAvatarUpload"
              :http-request="(params) => httpRequestImage(params, index)">
              <img v-if="form.article[index].imageName" :src="form.article[index].imageName" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-button type="danger" icon="el-icon-delete" circle class="deleteButton"
              @click="deletAddNews(index)"></el-button>
          </el-form-item>
        </template>
        <div class="newsOptions">
          <el-button-group>
            <el-tooltip class="item" effect="dark" :content="$t('goods.addParagraph')" placement="bottom">
              <el-button type="primary" @click="addNewsTexture" size="small" class="optionButton"><img
                  src="@/assets/addNews/text.png" alt="" /></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" :content="$t('goods.addIllustration')" placement="bottom">
              <el-button type="primary" @click="addNewsImg" size="small" class="optionButton"><img
                  src="@/assets/addNews/image.png" alt="" /></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" :content="$t('goods.PreviewNews')" placement="bottom">
              <el-button class="optionButton" size="small" type="primary" @click="previewNews"><img
                  src="@/assets/addNews/preview.png" alt="" /></el-button>
            </el-tooltip>
          </el-button-group>
        </div>
        <div class="newsUp">
          <el-button type="primary" @click="addNews">{{
            $t("goods.newGoods")
          }}</el-button>
          <el-button type="danger" @click="clearNews">{{
            $t("goods.clear")
          }}</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      form: {
        category: "",
        title: "",
        summary: "",
        coverImg: "",
        belongCompany: "",
        price: null,
        monthlySales: null,
        logisticsMethod: "",
        cover: "",
        article: [
          //   {
          //     type: "text",
          //     content: "",
          //   },
          //   {
          //     type: "image",
          //     imageName: "",
          //     src:"",
          //   },
        ],
        content: [],
        translations: [
          {
            title: "",
            author: "",
            summary: "",
            introduction: [],
            lang: 1
          }
        ],//Fanyi
      },
      restaurants: [],
      timeout: null,
      imageUrl: "",
      coverFile: null,
      fileList: [],
      uploadImgNum: 0,
      categoryList: [],
    };
  },

  mounted() {
    this.getCategory();
    // this.restaurants = this.loadAll();
  },
  methods: {
    // 获取所有类别
    getCategory() {
      this.axios
        .get(` ${process.env.VUE_APP_URL}/api/farmTools/category/list`)
        .then((res) => {
          this.categoryList = res.data.data;

          let categoryList = [];
          for (let i = 0; i < this.categoryList.length; i++) {
            categoryList[i] = {};
            categoryList[i].value = this.categoryList[i];
          }
          this.categoryList = categoryList;
          this.restaurants = this.loadAll();
        });
    },
    // 新闻主题
    loadAll() {
      return this.categoryList;
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    // 添加新一段
    addNewsTexture() {
      console.log(this.form);
      this.form.article.push({
        type: "text",
        content: "",
      });
      this.form.content.push({
        type: "text",
        content: "",
      });
      this.form.translations[0].introduction.push({
        content: "",
        type: "text"
      })  
      this.fileList.push(false);
    },
    // 新加新图片
    addNewsImg() {
      this.form.article.push({
        type: "image",
        imageName: "",
      });
      this.form.content.push({
        type: "image",
        imageName: "",
      });
      this.form.translations[0].introduction.push({
        type: "image",
        imageName: "",
      }) 
      this.fileList.push({ file: null });
    },
    // 删除新增片段
    deletAddNews(index) {
      this.form.article.splice(index, 1);
      this.form.content.splice(index, 1);
      this.form.translations[0].content.splice(index, 1)
      this.fileList.splice(index, 1);
    },
    // 新闻预览
    previewNews() {
      this.$emit("getForm", this.form);
      this.$store.commit("setShowNewsPreview", true);
    },
    // 上传图片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    httpRequestImageCover(params) {
      let that = this;
      let reader = new FileReader();
      reader.readAsDataURL(params.file);
      reader.onload = function (e) {
        that.form.cover = reader.result;
       
      };
      if (this.coverFile === null) {
        this.uploadImgNum++;
      }
      this.coverFile = params.file;
    },
    httpRequestImage(params, index) {
      let that = this;
      let reader = new FileReader();
      reader.readAsDataURL(params.file);
      reader.onload = function (e) {
        that.form.article[index].imageName = reader.result;
        that.form.translations[0].introduction[index].imageName = reader.result;
      };
      if (this.fileList[index].file === null) {
        this.uploadImgNum++;
      }
      this.fileList[index].file = params.file;
    },
    checkUploadDown(index) {
      if (index >= this.uploadImgNum) {
        this.uploadNewsObj();
      }
    },
    upLoadNewsImg() {
      let index = 0;
      // 上传封面
      if (this.coverFile !== null) {
        this.axios
          .post(
            `${process.env.VUE_APP_URL}/api/farmTools/picture`,
            {
              picture: this.coverFile,
            },
            {
              headers: {
                Authorization: window.sessionStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            //
            index++;
            this.form.coverImg = res.data.data;
            this.checkUploadDown(index);
          });
      }
      // 上传图片
      for (let i = 0; i < this.fileList.length; i++) {
        if (this.fileList[i] !== false && this.fileList[i].file !== null) {
          this.axios
            .post(
              `${process.env.VUE_APP_URL}/api/farmTools/picture`,
              {
                picture: this.fileList[i].file,
              },
              {
                headers: {
                  Authorization: window.sessionStorage.getItem("token"),
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((res) => {
              //
              index++;
              this.form.article[i].imageName = res.data.data;
              this.form.translations[0].introduction[i].imageName = res.data.data;
              this.checkUploadDown(index);
            });
        }
      }
    },
    uploadNewsObj() {
      if (this.form.category === '' || !this.form.category) {
        return this.$message({
          showClose: true,
          message: "请填入商品类型(Please enter the news type)!",
          type: "warning",
        });
      }
      this.form.translations[0].introduction = JSON.stringify(this.form.translations[0].introduction)
      this.axios
        .post(
          `${process.env.VUE_APP_URL}/api/farmTools`,
          Object.assign({}, this.form, {
            introduction: JSON.stringify(this.form.article),
            translations:this.form.translations
          }),
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          // 上传成功
          this.$message({
            showClose: true,
            message: "商品添加成功",
            type: "success",
          });

          if (res.data.status === 200) {
            this.clearNews()
          }
        });
    },
    addNews() {
      this.upLoadNewsImg();
    },
    clearNews() {
      this.form = {
        category: "",
        title: "",
        summary: "",
        coverImg: "",
        belongCompany: "",
        price: null,
        monthlySales: null,
        logisticsMethod: "",
        cover: "",
        article: [],
        content: [],
        translations: [{
          title: "",
          author: "",
          summary: "",
          introduction: [],
          lang: 1
        }],
      };
    },
  },
};
</script>
  
<style lang="less">
.addNews {
  width: 100%;
  background-color: #fff;
  min-width: 880px;
  margin-bottom: 28px;
  position: relative;
  background-image: url("../../../assets/fondo_marcas4.png"),
    url("../../../assets/fondo_marcas5.png");
  background-position: left center, right, center;
  background-size: contain, contain;
  background-repeat: no-repeat, no-repeat;

  .addNewsHeader {
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

  .addNewsForm {
    width: 100%;
    padding: 18px 23px;
  }

  .articleTitle {
    width: 260px;
  }

  .articleContent {
    width: calc(100% - 50px);
  }

  .deleteButton {
    margin-left: 10px;
  }

  .articleImg {
    // width: calc(100% - 50px);
    width: 300px;
    vertical-align: bottom;
  }

  .newsOptions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;

    .optionButton {
      //   width: 22px;
      padding: 0 9px;
      height: 32px;

      img {
        width: 18px;
        height: auto;
      }
    }
  }

  .newsUp {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader {
  display: inline-block;
  vertical-align: bottom;
}

.el-form-item__content {
  line-height: 0px;
}
</style>
  