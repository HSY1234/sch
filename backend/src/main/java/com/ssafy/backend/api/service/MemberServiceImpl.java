package com.ssafy.backend.api.service;

import com.ssafy.backend.common.util.SHA256;
import com.ssafy.backend.db.entity.Member;
import com.ssafy.backend.db.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("memberService")
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberRepository memberRepository;

    //아이디 중복 체크
    //1이면 중복으로 아이디 사용 불가, 아니라면 사용 가능
    @Override
    public Long idDuplicateCheck(String loginId) {
        return memberRepository.getCountOfLoginID(loginId);
    }

    //이메일 중복 체크
    //1이면 중복으로 이메일 사용 불가, 아니라면 사용 가능
    @Override
    public Long emailDuplicateCheck(String email) {
        return memberRepository.getCountOfEmail(email);
    }

    //휴대폰번호 중복 체크
    @Override
    public Long PhoneDuplicateCheck(String phoneNumber) {
        return memberRepository.getCountOfPhoneNumber(phoneNumber);
    }

    //회원가입
    @Transactional
    @Override
    public void join(Member member) throws Exception {
        System.out.println(member.toString());
        //비밀번호 암호화해서 저장
        member.setLoginPassword( new SHA256().getHash(member.getLoginPassword()) );
        memberRepository.save(member);
    }

    //로그인
    @Transactional
    @Override
    public int login(String loginId, String loginPassword) throws Exception {
        loginPassword = new SHA256().getHash(loginPassword);
        //존재하지 않는 아이디로 로그인 하거나
        //아이디는 존재하지만 비밀번호가 틀릴 경우 로그인 실패
        if(memberRepository.findByLoginId(loginId) == null
                || !memberRepository.findByLoginId(loginId).getLoginPassword().equals(loginPassword))
            return 0;
        return 1;
    }

    //회원 정보 수정
    @Transactional
    @Override
    public void changeMemberInfo(Member editedMember, String loginId) {
        Member member = memberRepository.findByLoginId(loginId);

        member.setNickname(editedMember.getNickname());
        member.setEmail(editedMember.getEmail());
        member.setPhoneNumber(editedMember.getPhoneNumber());
        member.setIntroduce(editedMember.getIntroduce());

        memberRepository.save(member);
    }

    //프로필 이미지 업로드
    @Transactional
    @Override
    public void changeProfileImage(String loginId, String profileName, String profileUrl) {
        Member member = memberRepository.findByLoginId(loginId);

        member.setProfileName(profileName);
        member.setProfileUrl(profileUrl);

        memberRepository.save(member);
    }

    //비밀번호 재설정
    @Transactional
    @Override
    public void changeLoginPassword(String loginId, String newLoginPassword) throws Exception {
        Member member = memberRepository.findByLoginId(loginId);

        System.out.println(member);
        System.out.println(newLoginPassword);
        //새 비밀번호 저장
        member.setLoginPassword(new SHA256().getHash(newLoginPassword));
        memberRepository.save(member);
    }

    //회원탈퇴
    @Transactional
    @Override
    public int signOut(String loginId) throws Exception {
        int memberNo = getInfoByLoginId(loginId).getMemberNo();
        memberRepository.deleteById(memberNo);
        //추후 게시글, 댓글 등 전부 삭제

        return 1;
    }

    //아이디로 회원 불러오기
    @Override
    public Member getInfoByLoginId(String loginId) throws Exception {
        return memberRepository.findByLoginId(loginId);
    }
}
