<template>
  <div :class="$style.adminHalamanAdmin">
    <div :class="$style.header">
      <div :class="$style.headerChild" />
    </div>
    <div :class="$style.sidebar">
      <img
        :class="$style.sidebarChild"
        alt=""
        src="/rectangle-22.svg"
        data-scroll-to="rectangle"
      />
      <div :class="$style.suikaParent">
        <b :class="$style.suika">SUIKA</b>
        <div :class="$style.admin">Admin</div>
        <div :class="$style.pexelsPhoto23790041" />
        <img :class="$style.eiuserIcon" alt="" src="/eiuser2.svg" />
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
            <div :class="$style.label" :onClick="onLabelTextClick">
              Dashboard
            </div>
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
              <div :class="$style.link5" @click="onLinkContainer5Click">
                <div :class="$style.label5">
                  <ul :class="$style.user">
                    User
                  </ul>
                </div>
              </div>
              <div :class="$style.link6">
                <div :class="$style.label6" @click="onLabelText6Click">
                  <ul :class="$style.user">
                    Edit Profile
                  </ul>
                </div>
              </div>
              <div :class="$style.line" />
            </div>
          </div>
        </div>
        <img :class="$style.signOutAlt1Icon" alt="" src="/signoutalt-11.svg" />
        <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
      </div>
    </div>
    <div :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <div :class="$style.admin1">ADMIN</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-1@2x.png"
      />
    </div>
    <div :class="$style.adminHalamanAdminChild" />
    <div :class="$style.selamatDatangDi">Selamat Datang Di Dashboard Admin</div>
    <div :class="$style.totalPeminjamanParent">
      <b :class="$style.totalPeminjaman">Total Peminjaman</b>
      <div :class="$style.div">4</div>
    </div>
    <div :class="$style.adminHalamanAdminItem" />
    <div :class="$style.selengkapnya" @click="onSelengkapnyaTextClick">
      Selengkapnya
    </div>
    <div :class="$style.totalHistoryParent">
      <b :class="$style.totalPeminjaman">Total History</b>
      <div :class="$style.div">4</div>
    </div>
    <div :class="$style.adminHalamanAdminInner" />
    <div :class="$style.selengkapnya1" @click="onSelengkapnyaText1Click">
      Selengkapnya
    </div>
    <div :class="$style.totalAkunParent">
      <b :class="$style.totalPeminjaman">Total Akun</b>
      <div :class="$style.div">4</div>
    </div>
    <div :class="$style.rectangleDiv" />
    <div :class="$style.selengkapnya2" @click="onSelengkapnyaText2Click">
      Selengkapnya
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminHalamanAdmin",
    methods: {
      onLabelTextClick() {
        const anchor = document.querySelector("[data-scroll-to='rectangle']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
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
      onLinkContainer5Click() {
        this.$router.push("/admin-data-user");
      },
      onLabelText6Click() {
        this.$router.push("/admin-profile");
      },
      onLogoutTextClick() {
        this.$router.push("/");
      },
      onSelengkapnyaTextClick() {
        this.$router.push("/admin-data-peminjaman");
      },
      onSelengkapnyaText1Click() {
        this.$router.push("/admin-data-history");
      },
      onSelengkapnyaText2Click() {
        this.$router.push("/admin-data-user");
      },
    },
  });
</script>
<style module>
  .headerChild {
    flex: 1;
    position: relative;
    background-color: var(--color-orange);
    height: 68px;
  }
  .header {
    position: absolute;
    top: -4px;
    left: 3px;
    width: 1437px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 0px 0px;
    box-sizing: border-box;
  }
  .sidebarChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1021px;
  }
  .suika {
    position: absolute;
    height: 11.42%;
    width: 34.16%;
    top: 84.66%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 189.9px;
    left: 53px;
    font-size: var(--base-body-size);
    font-weight: 500;
    color: var(--color-gold);
    display: inline-block;
    width: 48px;
    height: 19.3px;
  }
  .pexelsPhoto23790041 {
    position: absolute;
    top: -19.3px;
    left: 10px;
    border-radius: var(--br-20xl);
    background-color: var(--color-gold);
    width: 151px;
    height: 186.5px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
    height: 167.2px;
    overflow: hidden;
  }
  .suikaParent {
    position: absolute;
    height: 20.49%;
    width: 59.63%;
    top: 8.68%;
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
  }
  .link5 {
    border-radius: var(--br-5xs);
    width: 172px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    box-sizing: border-box;
    cursor: pointer;
    z-index: 0;
  }
  .label6 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  .link6 {
    border-radius: var(--br-5xs);
    background-color: var(--color-gold);
    width: 172px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    box-sizing: border-box;
    z-index: 1;
  }
  .line {
    position: absolute;
    margin: 0 !important;
    height: 100%;
    top: 0%;
    bottom: 0%;
    left: -13px;
    background-color: var(--color-gainsboro-200);
    width: 2px;
    z-index: 2;
  }
  .linksContainer {
    width: 189px;
    height: 104px;
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
    height: 156px;
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
    top: 481.2px;
    left: 130px;
    width: 17px;
    height: 15.6px;
    overflow: hidden;
  }
  .logout {
    position: absolute;
    top: 479.4px;
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
    top: 297.6px;
    left: 7px;
    width: 256px;
    height: 506.4px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: 3px;
    left: 0px;
    width: 270px;
    height: 1021px;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
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
    color: var(--color-black);
  }
  .adminHalamanAdminChild {
    position: absolute;
    top: 125px;
    left: 303px;
    border-radius: var(--br-xl);
    background-color: var(--color-orange);
    width: 1088px;
    height: 68px;
  }
  .selamatDatangDi {
    position: absolute;
    top: 144px;
    left: 332px;
    font-weight: 500;
    color: var(--color-black);
    display: inline-block;
    width: 627px;
  }
  .totalPeminjaman {
    position: absolute;
    top: 18px;
    left: 9px;
    display: inline-block;
    width: 335px;
    height: 42px;
  }
  .div {
    position: absolute;
    top: 67px;
    left: 55px;
    font-size: var(--font-size-21xl);
    font-weight: 500;
    color: var(--color-black);
    display: inline-block;
    width: 105.3px;
    height: 100.7px;
  }
  .totalPeminjamanParent {
    position: absolute;
    top: 258.5px;
    left: 300.5px;
    border-radius: var(--br-11xl);
    background-color: var(--color-orange);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 489.8px;
    height: 210.5px;
    font-family: var(--font-montserrat);
  }
  .adminHalamanAdminItem {
    position: absolute;
    top: 389px;
    left: 323px;
    border-radius: var(--br-xl);
    background-color: var(--color-khaki);
    width: 436px;
    height: 68px;
  }
  .selengkapnya {
    position: absolute;
    top: 413px;
    left: 385px;
    font-weight: 800;
    text-align: center;
    display: inline-block;
    width: 335px;
    height: 42px;
    cursor: pointer;
  }
  .totalHistoryParent {
    position: absolute;
    top: 258.5px;
    left: 873.5px;
    border-radius: var(--br-11xl);
    background-color: var(--color-orange);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 489.8px;
    height: 210.5px;
    font-family: var(--font-montserrat);
  }
  .adminHalamanAdminInner {
    position: absolute;
    top: 389px;
    left: 896px;
    border-radius: var(--br-xl);
    background-color: var(--color-khaki);
    width: 436px;
    height: 68px;
  }
  .selengkapnya1 {
    position: absolute;
    top: 413px;
    left: 958px;
    font-weight: 800;
    text-align: center;
    display: inline-block;
    width: 335px;
    height: 42px;
    cursor: pointer;
  }
  .totalAkunParent {
    position: absolute;
    top: 512.5px;
    left: 302.5px;
    border-radius: var(--br-11xl);
    background-color: var(--color-orange);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 489.8px;
    height: 210.5px;
    font-family: var(--font-montserrat);
  }
  .rectangleDiv {
    position: absolute;
    top: 643px;
    left: 325px;
    border-radius: var(--br-xl);
    background-color: var(--color-khaki);
    width: 436px;
    height: 68px;
  }
  .selengkapnya2 {
    position: absolute;
    top: 667px;
    left: 387px;
    font-weight: 800;
    text-align: center;
    display: inline-block;
    width: 335px;
    height: 42px;
    cursor: pointer;
  }
  .adminHalamanAdmin {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-dimgray-200);
    font-family: var(--base-base-primary-bold);
  }
</style>
