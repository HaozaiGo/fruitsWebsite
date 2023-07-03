<template>
  <div class="addNews">
    <div class="addNewsHeader">{{ $t("navLeft.AddNews") }}</div>
    <div class="addNewsForm">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item :label="$t('news.category')">
          <el-autocomplete
            v-model="form.type"
            :fetch-suggestions="querySearchAsync"
            :placeholder="$t('news.placeholderCategory')"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item :label="$t('news.cover')">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :before-upload="beforeAvatarUpload"
            :http-request="(params) => httpRequestImageCover(params)"
          >
            <img v-if="form.cover" :src="form.cover" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item :label="$t('news.title')">
          <el-input
            v-model="form.title"
            :placeholder="$t('news.placeholderTitle')"
            class="articleTitle"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('news.summary')">
          <el-input
            v-model="form.summary"
            :placeholder="$t('news.placeholderSummary')"
            class="articleTitle"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('news.author')">
          <el-input
            v-model="form.author"
            :placeholder="$t('news.placeholderAuthor')"
            class="articleTitle"
          ></el-input>
        </el-form-item>
        <template v-for="(item, index) in form.article">
          <el-form-item
            :label="$t('news.paragraph')"
            :key="index"
            v-if="item.type === 'text'"
          >
            <el-input
              type="textarea"
              v-model="form.content[index].content"
              class="articleContent"
            ></el-input>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              class="deleteButton"
              @click="deletAddNews(index)"
            ></el-button>
          </el-form-item>
          <el-form-item
            :label="$t('news.illustrations')"
            :key="index"
            v-else-if="item.type === 'image'"
          >
            <el-upload
              class="avatar-uploader"
              action="#"
              :show-file-list="false"
              :before-upload="beforeAvatarUpload"
              :http-request="(params) => httpRequestImage(params, index)"
            >
              <img
                v-if="form.article[index].imageName"
                :src="form.article[index].imageName"
                class="avatar"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              class="deleteButton"
              @click="deletAddNews(index)"
            ></el-button>
          </el-form-item>
        </template>
        <div class="newsOptions">
          <el-button-group>
            <el-tooltip
              class="item"
              effect="dark"
              :content="$t('news.addParagraph')"
              placement="bottom"
            >
              <el-button
                type="primary"
                @click="addNewsTexture"
                size="small"
                class="optionButton"
                ><img src="../assets/addNews/text.png" alt=""
              /></el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              :content="$t('news.addIllustration')"
              placement="bottom"
            >
              <el-button
                type="primary"
                @click="addNewsImg"
                size="small"
                class="optionButton"
                ><img src="../assets/addNews/image.png" alt=""
              /></el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              :content="$t('news.PreviewNews')"
              placement="bottom"
            >
              <el-button
                class="optionButton"
                size="small"
                type="primary"
                @click="previewNews"
                ><img src="../assets/addNews/preview.png" alt=""
              /></el-button>
            </el-tooltip>
          </el-button-group>
        </div>
        <div class="newsUp">
          <el-button type="primary" @click="addNews">{{
            $t("news.newNews")
          }}</el-button>
          <el-button type="danger" @click="clearNews">{{
            $t("news.clear")
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
        type: "",
        title: "",
        author: "",
        summary: "",
        cover: "",
        coverImg: "",
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
        .get(` ${process.env.VUE_APP_URL}/api/news/category/list`)
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
      this.form.article.push({
        type: "text",
        content: "",
      });
      this.form.content.push({
        type: "text",
        content: "",
      });
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
      this.fileList.push({ file: null });
    },
    // 删除新增片段
    deletAddNews(index) {
      this.form.article.splice(index, 1);
      this.form.content.splice(index, 1);
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
      reader.onload = function(e) {
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
      reader.onload = function(e) {
        that.form.article[index].imageName = reader.result;
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
            `${process.env.VUE_APP_URL}/api/news/picture`,
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
              `${process.env.VUE_APP_URL}/api/news/picture`,
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
              this.form.content[i].imageName = res.data.data;
              this.checkUploadDown(index);
            });
        }
      }
    },
    uploadNewsObj() {
      this.axios
        .post(
          `${process.env.VUE_APP_URL}/api/news`,
          {
            title: this.form.title,
            coverImg: this.form.coverImg,
            category: this.form.type,
            author: this.form.author,
            summary: this.form.summary,
            content: JSON.stringify(this.form.content),
          },
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
            message: "新闻添加成功",
            type: "success",
          });
        });
    },
    addNews() {
      this.upLoadNewsImg();
    },
    clearNews() {
      this.form = {
        type: "",
        title: "",
        author: "",
        summary: "",
        cover: "",
        coverImg: "",
        article: [],
        content: [],
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
  background-image: url(../assets/fondo_marcas4.png),
    url("../assets/fondo_marcas5.png");
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
