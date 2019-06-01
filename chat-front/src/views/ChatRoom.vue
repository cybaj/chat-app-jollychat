<template>
  <div
    class="inner-wrap"
    fluid
    fill-height
    inner-wrap
  >
    <Message-List
      :msgs="msgDatas"
      class="msg-list"
    />
    <Message-From
      class="msg-form"
      @submitMessage="sendMessage"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import MessageList from '@/components/Chat/MessageList.vue';
import MessageForm from '@/components/Chat/MessageForm.vue';
import Constant from '@/Constant';

export default {
  name: 'ChatRoom',
  components: {
    'Message-List': MessageList,
    'Message-From': MessageForm,
  },
  data () {
    return {
      datas: [],
      bot: "Sonbot"
    };
  },
  computed: {
    ...mapState({
      msgDatas: state => state.socket.msgDatas,
    }),
  },
  created () {
    const $ths = this;
    this.$socket.on('chat', (data) => {
      this.pushMsgData(data);
      $ths.datas.push(data);
    });
  },
  methods: {
    ...mapMutations({
      pushMsgData: Constant.PUSH_MSG_DATA,
    }),
    sendMessage (msg) {
      const self = this
      console.log(self.bot)
      this.pushMsgData({
        from: {
          name: '나',
        },
        msg
      });
      this.$sendMessage({
        name: this.$route.params.username,
        msg,
        bot: self.bot
      });
    },
  },
};
</script>

<style>
.msg-form {
  bottom: -28px;
  position: absolute;
  left: 0;
  right: 0;
}
.msg-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px;
  overflow-x: scroll;
}
</style>
