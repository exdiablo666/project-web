<template>
  <div :class="$style.adminDataHistory">
    <div :class="$style.sidebar">
      <img
        :class="$style.sidebarChild"
        alt=""
        src="/rectangle-22.svg"
        data-scroll-to="rectangle"
      />
      <div :class="$style.frame">
        <div :class="$style.suikaParent">
          <b :class="$style.suika">SUIKA</b>
          <div :class="$style.admin">Admin</div>
          <div :class="$style.pexelsPhoto23790041" />
          <img :class="$style.eiuserIcon" alt="" src="/eiuser2.svg" />
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
            <div :class="$style.label" :onClick="onLabelText1Click">
              History
            </div>
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
              <div :class="$style.link6" @click="onLinkContainer6Click">
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
        <img :class="$style.frameIcon" alt="" src="/frame1.svg" />
        <div :class="$style.frame1" @click="onFrameContainer1Click">
          <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
        </div>
      </div>
      <div :class="$style.rectangleParent">
        <div :class="$style.groupChild" />
        <div :class="$style.admin1">ADMIN</div>
        <img
          :class="$style.logoSuikaTransformedPrevUiIcon"
          alt=""
          src="/logo-suikatransformed-prev-ui-12@2x.png"
        />
      </div>
    </div>
    <div :class="$style.adminDataHistoryChild" />
    <div :class="$style.frame2">
      <div :class="$style.frameChild" />
    </div>
    <div :class="$style.frame3">
      <div :class="$style.tableColumn">
        <div :class="$style.heading">
          <div :class="$style.headingChild" />
          <div :class="$style.headingItem" />
          <div :class="$style.title1">ID History</div>
          <img :class="$style.headingInner" alt="" src="/group-2061.svg" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle">1002</div>
          <div :class="$style.titleValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle">1002</div>
          <div :class="$style.titleValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle">1003</div>
          <div :class="$style.amountValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle">1004</div>
          <div :class="$style.titleValueItem" />
        </div>
      </div>
    </div>
    <div :class="$style.frame4">
      <div :class="$style.dataHistory">Data History</div>
    </div>
    <div :class="$style.frame5">
      <div :class="$style.tableColumn1">
        <div :class="$style.heading1">
          <div :class="$style.headingChild" />
          <div :class="$style.headingItem" />
          <div :class="$style.date">User ID</div>
          <img :class="$style.headingInner" alt="" src="/group-2061.svg" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle4">20001</div>
          <div :class="$style.titleValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle5">20002</div>
          <div :class="$style.titleValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle5">20003</div>
          <div :class="$style.amountValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle7">20004</div>
          <div :class="$style.titleValueItem" />
        </div>
      </div>
    </div>
    <div :class="$style.frame6">
      <div :class="$style.tableColumn2">
        <div :class="$style.heading1">
          <div :class="$style.headingChild" />
          <div :class="$style.date">Inventory ID</div>
          <div :class="$style.lineDiv" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.headingChild" />
          <div :class="$style.octoober2021">120001</div>
          <div :class="$style.dateValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.headingChild" />
          <div :class="$style.octoober20211">120002</div>
          <div :class="$style.dateValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.headingChild" />
          <div :class="$style.octoober20212">120003</div>
          <div :class="$style.dateValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.headingChild" />
          <div :class="$style.octoober20212">120004</div>
          <div :class="$style.dateValueItem" />
        </div>
      </div>
    </div>
    <div :class="$style.frame7">
      <div :class="$style.tableColumn3">
        <div :class="$style.heading1">
          <div :class="$style.headingChild" />
          <div :class="$style.headingItem" />
          <div :class="$style.date">ID Peminjaman</div>
          <img :class="$style.headingInner" alt="" src="/group-2062.svg" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle8">0111</div>
          <div :class="$style.amountValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle9">0222</div>
          <div :class="$style.amountValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle10">0333</div>
          <div :class="$style.amountValueItem" />
        </div>
        <div :class="$style.titleValue">
          <div :class="$style.titleValueChild" />
          <div :class="$style.testTitle11">0444</div>
          <div :class="$style.amountValueItem" />
        </div>
      </div>
    </div>
    <div :class="$style.frame8">
      <div :class="$style.tableColumn4">
        <div :class="$style.heading4">
          <div :class="$style.headingChild" />
          <div :class="$style.headingItem" />
          <div :class="$style.amount">Kondisi</div>
        </div>
        <div :class="$style.amountValue">
          <div :class="$style.headingChild" />
          <div :class="$style.amountValueItem" />
          <div :class="$style.div">----</div>
        </div>
        <div :class="$style.amountValue">
          <div :class="$style.headingChild" />
          <div :class="$style.amountValueItem" />
          <div :class="$style.div">----</div>
        </div>
        <div :class="$style.amountValue">
          <div :class="$style.headingChild" />
          <div :class="$style.amountValueItem" />
          <div :class="$style.div">----</div>
        </div>
        <div :class="$style.amountValue">
          <div :class="$style.headingChild" />
          <div :class="$style.amountValueItem" />
          <div :class="$style.div">----</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminDataHistory",
    methods: {
      onLabelTextClick() {
        this.$router.push("/admin-halaman-admin");
      },
      onLabelText1Click() {
        const anchor = document.querySelector("[data-scroll-to='rectangle']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
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
      onLinkContainer6Click() {
        this.$router.push("/admin-profile");
      },
      onFrameContainer1Click() {
        this.$router.push("/");
      },
      onLogoutTextClick() {
        this.$router.push("/");
      },
    },
  });
</script>
<style module>
  .sidebarChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1021px;
  }
  .suika {
    position: absolute;
    height: 8.41%;
    width: 34.16%;
    top: 63.35%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 265px;
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
    position: relative;
    width: 161px;
    height: 284.3px;
  }
  .frame {
    position: absolute;
    top: 88.6px;
    left: 44px;
    width: 182px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
    cursor: pointer;
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
  .frameIcon {
    position: absolute;
    top: 481.2px;
    left: 0px;
    width: 147px;
    height: 15.6px;
    overflow: hidden;
  }
  .logout {
    position: relative;
    font-weight: 500;
    display: inline-block;
    width: 51px;
    height: 15.6px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .frame1 {
    position: absolute;
    top: 479.4px;
    left: 0px;
    width: 107px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    cursor: pointer;
    font-family: var(--font-montserrat);
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
  .groupChild {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 270px;
    height: 68px;
  }
  .admin1 {
    position: absolute;
    top: 22.3px;
    left: 90px;
    font-weight: 800;
    display: inline-block;
    width: 77px;
    height: 26px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 1px;
    left: 0px;
    border-radius: var(--br-123xl);
    width: 87px;
    height: 67.7px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: -3px;
    left: 0px;
    width: 270px;
    height: 68px;
    font-size: var(--font-size-5xl);
    font-family: var(--base-base-primary-bold);
  }
  .sidebar {
    position: absolute;
    top: 2px;
    left: 0px;
    width: 270px;
    height: 1021px;
    text-align: left;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .adminDataHistoryChild {
    position: absolute;
    top: -2px;
    left: 270px;
    background-color: var(--color-orange);
    width: 1170px;
    height: 68px;
  }
  .frameChild {
    align-self: stretch;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-orange);
    height: 68px;
  }
  .frame2 {
    position: absolute;
    top: -10px;
    left: 298px;
    width: 1075px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .headingChild {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-white);
  }
  .headingItem {
    position: absolute;
    height: 4%;
    width: 100%;
    top: 96%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .title1 {
    position: absolute;
    top: 17px;
    left: -1px;
    line-height: 22px;
    font-weight: 500;
  }
  .headingInner {
    position: absolute;
    top: 14px;
    right: 16px;
    width: 12px;
    height: 22px;
  }
  .heading {
    align-self: stretch;
    position: relative;
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-base-primary-bold);
  }
  .titleValueChild {
    position: absolute;
    height: 98%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 2%;
    left: 0%;
    background-color: var(--light-white);
  }
  .testTitle {
    position: absolute;
    top: 14px;
    left: 31px;
    line-height: 22px;
  }
  .titleValueItem {
    position: absolute;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .titleValue {
    align-self: stretch;
    position: relative;
    height: 50px;
  }
  .tableColumn {
    width: 134px;
    height: 548px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame3 {
    position: absolute;
    top: 249px;
    left: 317px;
    width: 163px;
    height: 547px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .dataHistory {
    align-self: stretch;
    position: relative;
    font-weight: 500;
  }
  .frame4 {
    position: absolute;
    top: 11px;
    left: 342px;
    width: 246px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    font-size: var(--font-size-17xl);
    color: var(--color-black);
    font-family: var(--base-base-primary-bold);
  }
  .heading1 {
    align-self: stretch;
    position: relative;
    height: 50px;
    text-align: left;
    color: var(--light-dark);
    font-family: var(--base-base-primary-bold);
  }
  .testTitle4 {
    position: absolute;
    top: 14px;
    left: 27px;
    line-height: 22px;
  }
  .testTitle5 {
    position: absolute;
    top: 14px;
    left: 25px;
    line-height: 22px;
  }
  .testTitle7 {
    position: absolute;
    top: 14px;
    left: 24px;
    line-height: 22px;
  }
  .tableColumn1 {
    width: 185px;
    height: 548px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame5 {
    position: absolute;
    top: 249px;
    left: 466px;
    width: 187px;
    height: 548px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .date {
    position: absolute;
    top: 17px;
    left: 16px;
    line-height: 22px;
    font-weight: 500;
  }
  .lineDiv {
    position: absolute;
    height: 4%;
    width: 101.08%;
    top: 98%;
    right: -0.54%;
    bottom: -2%;
    left: -0.54%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .octoober2021 {
    position: absolute;
    top: 14px;
    left: 51px;
    line-height: 22px;
  }
  .dateValueItem {
    position: absolute;
    height: 2%;
    width: 100.54%;
    top: 99%;
    right: -0.27%;
    bottom: -1%;
    left: -0.27%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .octoober20211 {
    position: absolute;
    top: 14px;
    left: 50px;
    line-height: 22px;
  }
  .octoober20212 {
    position: absolute;
    top: 14px;
    left: 49px;
    line-height: 22px;
  }
  .tableColumn2 {
    width: 185px;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame6 {
    position: absolute;
    top: 250px;
    left: 652px;
    width: 189px;
    height: 550px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .testTitle8 {
    position: absolute;
    top: 14px;
    left: 35px;
    line-height: 22px;
  }
  .testTitle9 {
    position: absolute;
    top: 14px;
    left: 30px;
    line-height: 22px;
  }
  .testTitle10 {
    position: absolute;
    top: 14px;
    left: 29px;
    line-height: 22px;
  }
  .testTitle11 {
    position: absolute;
    top: 14px;
    left: 28px;
    line-height: 22px;
  }
  .tableColumn3 {
    width: 203px;
    height: 551px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame7 {
    position: absolute;
    top: 250px;
    left: 836px;
    width: 209px;
    height: 551px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .amount {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 23.5px);
    line-height: 22px;
    font-weight: 500;
  }
  .heading4 {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 50px;
    font-family: var(--base-base-primary-bold);
  }
  .amountValueItem {
    position: absolute;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .div {
    position: absolute;
    top: calc(50% - 11px);
    left: calc(50% - 15.5px);
    line-height: 22px;
  }
  .amountValue {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 50px;
  }
  .tableColumn4 {
    width: 207px;
    height: 549px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame8 {
    position: absolute;
    top: 250px;
    left: 1042px;
    width: 204px;
    height: 549px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: var(--light-dark);
  }
  .adminDataHistory {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: center;
    font-size: var(--base-body-size);
    color: var(--light-secondary);
    font-family: var(--base-body);
  }
</style>
