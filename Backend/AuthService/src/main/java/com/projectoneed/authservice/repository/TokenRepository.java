package com.projectoneed.authservice.repository;

import com.projectoneed.authservice.model.token.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Integer> {

  @Query(value = """
      select t from Token t inner join User u\s
      on t.user.userId = u.userId\s
      where u.userId = :id and (t.expired = false or t.revoked = false)\s
      """)
  List<Token> findAllValidTokenByUser(String id);

  Optional<Token> findByToken(String token);

//  @Query(value = """
//      select t from Token t inner join User u\s
//      on t.user.id = u.id\s
//      where u.id = :id and t.expired = true\s
//      """)
//  List<Token> findAllExpiredTokensByUser(String id);
//
//  @Transactional
//  @Modifying
//  @Query(value = """
//      delete from Token t\s
//      where t.id in :ids
//      """)
//  void deleteTokensWithIds(List<Integer> ids);
}
