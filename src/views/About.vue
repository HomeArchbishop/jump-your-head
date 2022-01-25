<template>
  <div class="about-container">
    <div class="main-box">
      <h1 class="title">📎 关于</h1>
      <span class="warning"><b><strong>这是一个危险的作品！请注意你的使用。</strong></b></span>
      <p>
        “每天锻炼一小时，幸福生活一辈子。”
      </p>
      <p>
        我做出这个东西，只是好玩，而非为了炫技，因为这个毫无技术含量，懂的人一眼看穿。也不是为了鼓励大家逃避「天天跳绳」的监督，走偷懒的捷径。
      </p>
      <p>
        更不是为了用<s>猎奇的人物头像</s>来制造舆论、讽刺时事。如果你在此中出现了任何不适，
        请立刻停止使用。<u>但请注意，此人物并非你认为的那位人物，<b>他只是普通人</b>，不要过分心证。</u>
      </p>
      <p>
        希望你也能够成为跳绳280/min、开合跳3000分的普通人。
      </p>
      <p>
        以上，
      </p>
      <p align="right">
        主教
        <br>
        👉
        <a class="repo-link"
          href="https://github.com/HomeArchbishop/jump-your-head" target="_blank"
        >
          GitHub Repo
        </a>
      </p>
      <p class="tips">
        <small>
          /*<br>
          * 仓库在上，我是谁懂得都懂。<br>
          * 由于项目的特殊性，在证明你自己之前，我不会再提供任何关于我的信息。<br>
          * 另：我是一个友善的人，不会吃了你，找到我的话，交个朋友我很乐意。（真心<br>
          */
        </small>
      </p>
      <hr><hr><hr><hr><hr>
    </div>
  </div>
</template>

<style lang="less" scope>
@import '../assets/less/themes';
@import '../assets/less/layout';

.about-container {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  overflow: scroll;
  margin-top: @header-height;
  .main-box {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding-bottom: 2em;
    .warning {
      font-size: 3em;
      background-color: #ff0;
    }
    .repo-link {
      text-decoration: none;
      color: #0969da;
      &:hover {
        border-bottom: 1px solid #0969da;
      }
    }
    .tips {
      margin-top: 1em;
      padding: 0 1em;
      border-left: .25em solid #d0d7de;
    }
  }
}
</style>
