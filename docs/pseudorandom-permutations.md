# 유사난수 순열

# 개요

**유사난수 순열(pseudorandom permutation)** 족 $\lbrace P\_k\rbrace$ 는 키 $k$ 로 정해지는 $\lbrace 0,1\rbrace^n$ 의 순열들로서, 순방향과 역방향이 모두 다항시간에 계산되고 키를 모르는 다항시간 알고리즘이 균등한 무작위 순열과 구별하지 못하는 것이다. 블록 암호(block cipher)의 안전성은 이 조건으로 정의한다.

[유사난수 생성기](pseudorandom-generators.md) 문서의 유사난수 함수는 순열이 아닐 수 있다. Luby 와 Rackoff 는 유사난수 함수 세 개로 Feistel 구조를 세 단계 쌓으면 유사난수 순열이 됨을 보였다[^1].

# 직관

블록 암호는 $2n$ 비트 블록을 같은 길이의 블록으로 보내고, 받는 쪽이 복호하려면 그 사상이 전단사여야 한다. 키로 정해지는 함수 $f$ 는 무작위 함수와 구별되지 않아도 역함수가 없을 수 있다. 그래서 $f$ 를 거꾸로 계산하지 않고도 되돌릴 수 있는 사상을 만든다.

블록을 반으로 나눠 $(L,R)$ 로 쓰고 $(L,R)\mapsto(R,\thinspace L\oplus f(R))$ 로 보낸다. 출력 $(R,L')$ 을 받으면 $L=L'\oplus f(R)$ 이므로 $f$ 가 무엇이든 입력이 복원된다. 이 한 단계는 출력의 앞 절반이 입력의 뒤 절반 $R$ 그대로라서 무작위 순열과 바로 구별된다. 단계를 여러 번 쌓아 그 흔적을 지우고, 이렇게 만든 순열을 Feistel 구조라 한다.

# 정의

## 유사난수 순열

$\lbrace P\_k\rbrace$ 는 각 $P\_k$ 가 $\lbrace 0,1\rbrace^n$ 의 전단사이고 $P\_k$ 와 $P\_k^{-1}$ 이 다항시간에 계산되는 족이다. $\pi$ 를 $\lbrace 0,1\rbrace^n$ 의 순열 전체에서 균등하게 고를 때, 모든 확률적 다항시간 오라클 알고리즘 $D$ 에 대해 다음이 무시할 만하면 $\lbrace P\_k\rbrace$ 를 유사난수 순열이라 한다.

$$
\bigl\lvert\Pr\lbrack D^{P\_k}=1\rbrack-\Pr\lbrack D^{\pi}=1\rbrack\bigr\rvert
$$

$D$ 에게 $P\_k^{-1}$ 과 $\pi^{-1}$ 의 오라클도 함께 줄 때 이 차가 무시할 만하면 **강한 유사난수 순열(strong pseudorandom permutation)** 이라 한다.

## Feistel 구조

함수 $f:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace^n$ 의 **Feistel 단계(Feistel round)** 는 $\lbrace 0,1\rbrace^{2n}$ 의 다음 순열이다.

$$
\Psi\_f(L,R)=(R,\thinspace L\oplus f(R))
$$

함수 $f\_1,\dots,f\_r$ 의 $r$ 단계 Feistel 구조는 합성 $\Psi(f\_1,\dots,f\_r)=\Psi\_{f\_r}\circ\cdots\circ\Psi\_{f\_1}$ 이고, 역사상은 단계마다 $\Psi\_f^{-1}(R,L')=(L'\oplus f(R),R)$ 을 거꾸로 합성한 것이다.

# 성질

## 전환 보조정리

**전환 보조정리(switching lemma).** $q$ 번 질의하는 알고리즘이 $\lbrace 0,1\rbrace^n$ 의 균등한 무작위 순열과 균등한 무작위 함수를 구별하는 확률 차는 $q(q-1)/2^{n+1}$ 이하다[^2].

무작위 함수의 답 $q$ 개가 모두 다르면 그 답은 무작위 순열의 답과 같은 분포이고, 답이 겹칠 확률은 생일 한계로 이 값 이하다. 그래서 $n$ 이 커지면 유사난수 순열은 유사난수 함수이기도 하다.

## 두 단계의 구별

$\Psi(f\_1,f\_2)$ 는 유사난수 순열이 아니다. 같은 $R$ 과 서로 다른 $L,L'$ 으로 두 번 질의하면 첫 단계 뒤의 값은 $(R,L\oplus f\_1(R))$ 과 $(R,L'\oplus f\_1(R))$ 이고, 둘째 단계 뒤 출력의 앞 절반은 각각 $L\oplus f\_1(R)$ 과 $L'\oplus f\_1(R)$ 이다. 두 출력의 앞 절반을 배타적 논리합하면 언제나 $L\oplus L'$ 이고, 무작위 순열에서 이 일이 일어날 확률은 $2^{-n}$ 정도다.

## Luby–Rackoff 정리

**Luby–Rackoff 정리(Luby–Rackoff theorem).** $f\_1,f\_2,f\_3$ 이 독립인 키로 고른 유사난수 함수이면 $\Psi(f\_1,f\_2,f\_3)$ 은 $\lbrace 0,1\rbrace^{2n}$ 의 유사난수 순열이다. 단계를 넷으로 늘린 $\Psi(f\_1,f\_2,f\_3,f\_4)$ 는 강한 유사난수 순열이다[^1].

증명의 요지. 먼저 $f\_i$ 를 균등한 무작위 함수로 바꾼다. 차이는 유사난수 함수의 정의로 무시할 만하다. 질의 $q$ 개에서 둘째 단계와 셋째 단계에 들어가는 오른쪽 절반들이 모두 서로 다르면, 그 단계의 함숫값은 새로 뽑은 독립인 값이므로 출력은 서로 다른 균등한 값이 된다. 들어가는 값이 겹칠 확률은 $O(q^2/2^n)$ 이고, 그 밖의 경우 출력 분포는 무작위 순열과 전환 보조정리의 오차 안에서 같다. 세 단계 구조는 역방향 질의를 허락하면 구별된다.

# 활용

- 블록 암호. DES(data encryption standard)는 16 단계 Feistel 구조다. AES(advanced encryption standard)는 Feistel 구조가 아닌 치환·순열 연결망(substitution–permutation network)이지만 안전성 목표는 같은 유사난수 순열이다.
- 운용 모드. 카운터 모드는 블록 암호를 $F\_k(N\Vert i)$ 꼴의 유사난수 함수로 쓰고, 전환 보조정리가 그 안전성 증명의 한 단계다. [인증 암호화](authenticated-encryption.md)의 Galois/카운터 모드가 이 방식으로 암호화한다.
- 형식 보존 암호화(format-preserving encryption). 카드 번호처럼 정해진 형식의 작은 집합 위에서 Feistel 구조를 돌려 같은 형식의 값으로 암호화한다[^3].

[^1]: M. Luby, C. Rackoff, "How to construct pseudorandom permutations from pseudorandom functions", SIAM Journal on Computing 17 (1988), 373–386.
[^2]: M. Bellare, P. Rogaway, "The security of triple encryption and a framework for code-based game-playing proofs", EUROCRYPT 2006, LNCS 4004, 409–426. 전환 보조정리의 증명과 그 이전 증명의 오류 정정이 있다.
[^3]: M. Dworkin, "Recommendation for block cipher modes of operation: methods for format-preserving encryption", NIST Special Publication 800-38G, 2016.

# 연관 문서

## 선수지식

- [유사난수 생성기](pseudorandom-generators.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #complexity #probability
