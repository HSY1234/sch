package com.ssafy.backend.api.service;

import com.ssafy.backend.api.request.reply.ReplyChangeReq;
import com.ssafy.backend.api.request.reply.ReplyRegiPostReq;
import com.ssafy.backend.db.entity.Member;
import com.ssafy.backend.db.entity.Reply;

import java.util.List;

public interface ReplyService {
    List<Reply> GetReplies(long boardNo);

    boolean regiReply(long board_no, ReplyRegiPostReq regiReq, Member member);

    boolean chageReply(ReplyChangeReq changeReq);

    boolean deleteReply(long reply_no);
}
