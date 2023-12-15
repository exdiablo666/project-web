<template>
  <div :class="$style.adminProfile">
    <div :class="$style.sidebar">
      <img :class="$style.sidebarChild" alt="" src="/rectangle-21.svg" />
      <div :class="$style.profile">
        <div :class="$style.suikaParent">
          <b :class="$style.suika">SUIKA</b>
          <div :class="$style.pexelsPhoto23790041" />
          <img :class="$style.eiuserIcon" alt="" src="/eiuser1.svg" />
        </div>
      </div>
      <div :class="$style.navigationParent">
        <div :class="$style.navigation">
          <div :class="$style.title">
            <div :class="$style.overline">Main</div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.iconHomeSimpleDoor"
              alt=""
              src="/icon--homesimpledoor.svg"
            />
            <div :class="$style.label" @click="onLabelTextClick">Dashboard</div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.materialSymbolspersonSearchIcon"
              alt=""
              src="/materialsymbolspersonsearch.svg"
            />
            <div :class="$style.label" @click="onLabelText1Click">History</div>
          </div>
          <div :class="$style.dropdown" @click="onDropdownContainerClick">
            <div :class="$style.link2">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--reports.svg"
              />
              <div :class="$style.label2">Master Data</div>
            </div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.iconHomeSimpleDoor"
              alt=""
              src="/icon--page.svg"
            />
            <div :class="$style.label" @click="onLabelText3Click">
              Peminjaman
            </div>
          </div>
          <div :class="$style.dropdown1">
            <div :class="$style.link2">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--user-1.svg"
              />
              <div :class="$style.label2">Account</div>
              <img
                :class="$style.iconChevron"
                alt=""
                src="/icon--chevron.svg"
              />
            </div>
            <div :class="$style.linksContainer">
              <div :class="$style.link5">
                <div :class="$style.label5" @click="onLabelText5Click">
                  <ul :class="$style.user">
                    User
                  </ul>
                </div>
              </div>
              <div :class="$style.link6">
                <div :class="$style.label6">
                  <ul :class="$style.user">
                    Edit Profile
                  </ul>
                </div>
              </div>
              <div :class="$style.line" />
            </div>
          </div>
        </div>
        <img :class="$style.signOutAlt1Icon" alt="" src="/signoutalt-1.svg" />
        <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
      </div>
    </div>
    <div :class="$style.header">
      <div :class="$style.headerChild" />
    </div>
    <div :class="$style.adminProfileChild" />
    <div :class="$style.profile1">Profile</div>
    <img :class="$style.profileIcon" alt="" src="/profile.svg" />
    <div :class="$style.namaSuikaContainer">
      <p :class="$style.namaSuika">Nama : Suika</p>
      <p :class="$style.namaSuika">&nbsp;</p>
      <p :class="$style.namaSuika">Username : Suika</p>
      <p :class="$style.namaSuika">&nbsp;</p>
      <p :class="$style.namaSuika">Password : *******</p>
    </div>
    <div :class="$style.adminProfileItem" />
    <div :class="$style.edit" @click="onEditTextClick">Edit</div>
    <div :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <div :class="$style.admin1">ADMIN</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-1@2x.png"
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminProfile",
    methods: {
      onLabelTextClick() {
        this.$router.push("/admin-halaman-admin");
      },
      onLabelText1Click() {
        this.$router.push("/admin-data-history");
      },
      onDropdownContainerClick() {
        this.$router.push("/admin-data-inventory");
      },
      onLabelText3Click() {
        this.$router.push("/admin-data-peminjaman");
      },
      onLabelText5Click() {
        this.$router.push("/admin-data-user");
      },
      onLogoutTextClick() {
        this.$router.push("/");
      },
      onEditTextClick() {
        this.$router.push("/admin-update-admin");
      },
    },
  });
</script>
<style module>
  .sidebarChild {
    position: absolute;
    top: 2px;
    left: 0px;
    width: 270px;
    height: 1026px;
  }
  .suika {
    position: absolute;
    height: 11.41%;
    width: 34.16%;
    top: 87.4%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 190.8px;
    left: 53px;
    font-size: var(--base-body-size);
    font-weight: 500;
    color: var(--color-gold);
    display: inline-block;
    width: 48px;
    height: 19.4px;
  }
  .pexelsPhoto23790041 {
    position: absolute;
    top: -19.4px;
    left: 10px;
    border-radius: var(--br-20xl);
    background-color: var(--color-gold);
    width: 151px;
    height: 187.4px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
    height: 168px;
    overflow: hidden;
  }
  .suikaParent {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
  }
  .profile {
    position: absolute;
    height: 20.5%;
    width: 59.63%;
    top: 8.67%;
    right: 24.07%;
    bottom: 70.83%;
    left: 16.3%;
  }
  .overline {
    position: relative;
    letter-spacing: 0.4px;
    line-height: 12px;
    text-transform: uppercase;
    font-weight: 500;
  }
  .title {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs);
  }
  .iconHomeSimpleDoor {
    position: relative;
    width: 20px;
    height: 20px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .label {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 20px;
    font-weight: 500;
    cursor: pointer;
  }
  .link {
    align-self: stretch;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-xs);
    gap: var(--gap-xs);
  }
  .materialSymbolspersonSearchIcon {
    position: relative;
    width: 20px;
    height: 21px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .label2 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 20px;
    font-weight: 500;
  }
  .link2 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-gold);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-xs);
    gap: var(--gap-xs);
  }
  .dropdown {
    align-self: stretch;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    cursor: pointer;
  }
  .iconChevron {
    position: relative;
    width: 16px;
    height: 16px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .user {
    margin: 0;
    padding-left: var(--padding-base);
  }
  .label5 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  .link5 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    z-index: 0;
  }
  .label6 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 16px;
    font-weight: 500;
  }
  .link6 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-gold);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    z-index: 1;
  }
  .line {
    align-self: stretch;
    position: absolute;
    margin: 0 !important;
    height: 100%;
    top: 0%;
    bottom: 0%;
    left: -13px;
    background-color: var(--color-gainsboro-200);
    z-index: 2;
  }
  .linksContainer {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-9xs);
    font-size: var(--font-inherit);
    font-family: var(--font-inherit);
  }
  .dropdown1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-xs);
  }
  .navigation {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-5xl) 0px;
    box-sizing: border-box;
    gap: var(--gap-5xs);
  }
  .signOutAlt1Icon {
    position: absolute;
    top: 483.6px;
    left: 130px;
    width: 17px;
    height: 15.6px;
    overflow: hidden;
  }
  .logout {
    position: absolute;
    top: 481.8px;
    left: 56px;
    font-weight: 500;
    font-family: var(--font-montserrat);
    display: inline-block;
    width: 51px;
    height: 15.6px;
    cursor: pointer;
  }
  .navigationParent {
    position: absolute;
    top: 299px;
    left: 7px;
    width: 256px;
    height: 499.2px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: -2px;
    left: 0px;
    width: 270px;
    height: 1026px;
    font-size: var(--font-size-mid);
  }
  .headerChild {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-orange);
    width: 1170px;
    height: 68px;
  }
  .header {
    position: absolute;
    top: -2px;
    left: 270px;
    width: 1170px;
    height: 68px;
  }
  .adminProfileChild {
    position: absolute;
    top: 124px;
    left: 298px;
    border-radius: var(--br-xl);
    background-color: var(--color-goldenrod);
    width: 1075px;
    height: 68px;
  }
  .profile1 {
    position: absolute;
    top: 138px;
    left: 333px;
    font-weight: 500;
    font-family: var(--base-base-primary-bold);
    display: inline-block;
    width: 392px;
  }
  .profileIcon {
    position: absolute;
    top: 195px;
    left: 333px;
    width: 235px;
    height: 263px;
  }
  .namaSuika {
    margin: 0;
  }
  .namaSuikaContainer {
    position: absolute;
    top: 241px;
    left: 607px;
    font-weight: 500;
    display: inline-block;
    width: 442px;
  }
  .adminProfileItem {
    position: absolute;
    top: 510px;
    left: 1180px;
    border-radius: var(--br-xl);
    background-color: var(--color-goldenrod);
    width: 168px;
    height: 68px;
  }
  .edit {
    position: absolute;
    top: 525px;
    left: 1237px;
    font-weight: 500;
    display: inline-block;
    width: 74px;
    cursor: pointer;
  }
  .frameChild {
    position: absolute;
    top: 8px;
    left: 4px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 273px;
    height: 68.8px;
  }
  .admin1 {
    position: absolute;
    top: 27.5px;
    left: 91px;
    font-weight: 800;
    display: inline-block;
    width: 77.8px;
    height: 32.1px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 10px;
    left: 7px;
    border-radius: var(--br-123xl);
    width: 88px;
    height: 83.7px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: -10px;
    left: -7px;
    width: 277px;
    height: 83.7px;
    font-size: var(--font-size-5xl);
    font-family: var(--base-base-primary-bold);
  }
  .adminProfile {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-17xl);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
</style>
