package com.ssafy.backend.api.service;


import com.ssafy.backend.api.request.debateBoard.DebateBoardRegiPostReq;
import com.ssafy.backend.db.entity.DebateBoard;
import com.ssafy.backend.db.entity.Member;

import java.util.List;

public interface DebateBoardService {
    List<DebateBoard> getBoards();
    DebateBoard getBoard(int board_no);

    boolean regiBoard(DebateBoardRegiPostReq regiReq, Member member);

    boolean deleteBoard(int board_no);

    boolean changeBoard(int board_no, DebateBoardRegiPostReq regiReq);
}
