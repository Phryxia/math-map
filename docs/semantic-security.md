# 의미론적 안전성

# 개요

**의미론적 안전성(semantic security)** 은 암호문을 본 공격자가 평문에 대해 알아낼 수 있는 것이 암호문을 보지 않고 알아낼 수 있는 것과 거의 같다는 암호화의 안전성 정의다. 투표 결과 yes 나 no 를 [RSA 암호](rsa-cryptosystem.md)로 $c=m^e \bmod n$ 처럼 암호화하면, 도청자가 공개키로 $\text{yes}^e$ 와 $\text{no}^e$ 를 직접 계산해 $c$ 와 비교하는 것만으로 투표 결과를 안다. 의미론적 안전성은 두 평문 가운데 어느 것의 암호문인지 맞히지 못할 것을 요구해 이런 공격을 막고, 이를 만족하려면 같은 평문도 암호화할 때마다 다른 암호문이 나오는 무작위 암호화가 필요하다.

# 직관

의미론적 안전성은 암호문을 본 다항시간 공격자가 평문에 대해 알아낼 수 있는 것이, 암호문을 보지 않고 알아낼 수 있는 것과 무시할 만한 차이밖에 없다는 공개키 암호화의 안전성 정의다. Goldwasser 와 Micali 가 1984 년에 정의했고, 두 평문 가운데 어느 것의 암호문인지 맞히지 못한다는 구별 불가능성과 동치다[^1].

이 정의를 만족하려면 암호화가 무작위여야 하므로 RSA 암호의 $m\mapsto m^e \bmod n$ 은 의미론적으로 안전하지 않다. [이산로그](discrete-logarithm.md)의 판정적 Diffie–Hellman 가정 위의 ElGamal 암호는 의미론적으로 안전하다.

투표 결과 $m\in\lbrace\text{yes},\text{no}\rbrace$ 를 RSA 공개키 $(n,e)$ 로 암호화해 $c=m^e \bmod n$ 을 보낸다. 도청자도 공개키를 가지고 있으므로 $\text{yes}^e$ 와 $\text{no}^e$ 를 직접 계산해 $c$ 와 비교하면 $m$ 이 나온다. $e$ 제곱의 역산이 어렵다는 가정은 이 공격과 무관하다. 도청자는 역산하지 않고 후보를 하나씩 암호화했다.

같은 평문이 언제나 같은 암호문이 되어서 이 공격이 성공한다. 그래서 암호화 때 난수 $r$ 을 함께 써서 같은 평문도 매번 다른 암호문이 되게 하고, 요구 조건을 "평문 후보가 둘뿐이고 도청자가 둘을 직접 골랐어도 암호문이 어느 쪽인지 맞히는 확률이 $1/2$ 과 거의 같다" 로 정한다.

# 정의

## 공개키 암호화

공개키 암호화 방식은 확률적 다항시간 알고리즘 셋 $(\mathrm{Gen},\mathrm{Enc},\mathrm{Dec})$ 이다. $\mathrm{Gen}(1^n)$ 이 공개키 $\mathit{pk}$ 와 비밀키 $\mathit{sk}$ 를 내고, $\mathrm{Enc}(\mathit{pk},m)$ 은 난수를 써서 암호문을 내며, 모든 $m$ 에 대해 $\mathrm{Dec}(\mathit{sk},\mathrm{Enc}(\mathit{pk},m))=m$ 이다.

## 의미론적 안전성

평문 분포 $M\_n$, 평문에 대한 부분 정보 $h(m)$, 알아내려는 함수 $f(m)$ 이 주어졌다고 하자. 방식이 의미론적으로 안전하다는 것은 모든 확률적 다항시간 알고리즘 $A$ 에 대해 다음을 만족하는 확률적 다항시간 알고리즘 $S$ 가 존재한다는 뜻이다.

$$
\Pr\lbrack A(\mathit{pk},\mathrm{Enc}(\mathit{pk},m),h(m))=f(m)\rbrack-\Pr\lbrack S(1^n,h(m))=f(m)\rbrack\le\varepsilon(n)
$$

$m$ 은 $M\_n$ 에서 뽑고 $\varepsilon$ 은 무시할 만한 함수다. $S$ 는 암호문 없이 $A$ 와 같은 일을 한다.

## 구별 불가능성

다음 게임을 생각한다.

1. 도전자가 $(\mathit{pk},\mathit{sk})$ 를 만들어 $\mathit{pk}$ 를 공격자 $A$ 에게 준다.
2. $A$ 가 길이가 같은 두 평문 $m\_0$, $m\_1$ 을 고른다.
3. 도전자가 $b\in\lbrace 0,1\rbrace$ 를 무작위로 골라 $c=\mathrm{Enc}(\mathit{pk},m\_b)$ 를 준다.
4. $A$ 가 $b'$ 을 낸다.

모든 확률적 다항시간 $A$ 에 대해 $\lvert\Pr\lbrack b'=b\rbrack-1/2\rvert$ 이 무시할 만하면 방식이 **선택 평문 공격에 대해 구별 불가능(indistinguishable under chosen-plaintext attack, IND-CPA)** 하다고 한다. 공개키가 있으면 공격자가 원하는 평문을 직접 암호화할 수 있으므로 "선택 평문" 이 붙는다.

4 단계 전에 $A$ 가 $c$ 가 아닌 암호문의 복호를 요청할 수 있게 한 것이 **선택 암호문 공격에 대한 구별 불가능성(indistinguishability under adaptive chosen-ciphertext attack, IND-CCA2)** 이다[^2].

# 성질

## 두 정의의 동치

공개키 암호화 방식이 의미론적으로 안전한 것과 IND-CPA 인 것은 동치다[^1][^3].

증명의 요지. 의미론적으로 안전하면 $M\_n$ 을 $\lbrace m\_0,m\_1\rbrace$ 위의 [균등분포](uniform-distribution.md)로, $f$ 를 첨자로 두어 IND-CPA 가 나온다. 반대로 IND-CPA 이면 $S$ 는 $\mathrm{Enc}(\mathit{pk},0^{\lvert m\rvert})$ 를 스스로 만들어 $A$ 에 넣는다. $A$ 의 성공 확률이 $m$ 의 암호문과 $0$ 의 암호문에서 크게 다르면 그 차이로 두 암호문을 구별하는 공격자가 만들어진다.

## 결정적 암호화의 불가능성

결정적 암호화 방식은 IND-CPA 가 아니다. 공격자는 받은 $c$ 를 $\mathrm{Enc}(\mathit{pk},m\_0)$ 과 비교해 확률 $1$ 로 $b$ 를 맞힌다. 직관 절의 공격이 이것이다.

## ElGamal 암호

위수가 소수 $q$ 인 순환군 $G=\langle g\rangle$ 에서 비밀키는 $x\in\mathbb Z/q\mathbb Z$, 공개키는 $h=g^x$ 이다. 평문 $m\in G$ 의 암호문은 무작위 $r$ 에 대해 다음이다[^4].

$$
\mathrm{Enc}(h,m)=(g^r,\thinspace m\thinspace h^r),\qquad \mathrm{Dec}(x,(u,v))=v\thinspace u^{-x}
$$

$G$ 에서 판정적 Diffie–Hellman 가정이 성립하면 ElGamal 암호는 IND-CPA 다[^5].

증명의 요지. 공격자가 보는 것은 $(g,g^x,g^r,m\_bg^{xr})$ 이다. 가정에 따라 $g^{xr}$ 을 무작위 원소 $g^z$ 로 바꿔도 공격자의 성공 확률은 무시할 만큼만 변한다. 바꾼 뒤에는 $m\_bg^z$ 가 $b$ 와 무관하게 균등하게 분포하므로 성공 확률이 정확히 $1/2$ 이다.

ElGamal 암호문은 곱을 보존한다. $(g^r,mh^r)$ 의 둘째 성분에 $m'$ 을 곱하면 $mm'$ 의 암호문이 된다. 그래서 복호 요청을 허락하면 도전 암호문을 변형해 복호를 요청하는 것으로 $b$ 가 나오고, ElGamal 은 IND-CCA2 가 아니다.

## Goldwasser–Micali 암호

$N=pq$ 에서 법 $p$ 와 법 $q$ 로 모두 제곱이 아닌 $y$ 를 공개한다. 비트 $b$ 의 암호문은 무작위 $r$ 에 대해 $c=y^br^2 \bmod N$ 이다. 비밀키 $p$ 로 $c$ 가 법 $p$ 제곱수인지 판정해 $b$ 를 얻는다. Jacobi 기호(Jacobi symbol)가 $1$ 인 원소의 제곱 여부를 $N$ 의 인수분해 없이 판정하기 어렵다는 이차 잉여 가정(quadratic residuosity assumption) 아래에서 IND-CPA 다[^1]. 처음 제안된 의미론적으로 안전한 방식이다.

# 활용

- RSA 의 실제 사용. RSA 는 무작위 패딩 OAEP(optimal asymmetric encryption padding)를 붙여 암호화하고, 무작위 오라클 모형에서 IND-CCA2 가 증명된다[^6].
- [완전동형암호](homomorphic-encryption.md)는 암호문 위의 연산을 허락하므로 정의상 IND-CCA2 가 될 수 없고, 안전성 목표가 IND-CPA 다.
- 격자 기반 암호. [격자 기반 후양자 암호](post-quantum-cryptography.md)의 공개키 암호화는 오류 있는 학습 문제의 판정판에서 IND-CPA 를 얻고, 표준 변환으로 IND-CCA2 키 캡슐화를 만든다.
- 대칭키 암호. 같은 정의를 비밀키 암호화에 쓰면 [유사난수 생성기](pseudorandom-generators.md)로 늘린 키와 배타적 논리합을 하는 방식이 한 메시지에 대해 의미론적으로 안전하다. 바뀐 암호문의 거절까지 요구하는 정의는 [인증 암호화](authenticated-encryption.md)다.

[^1]: S. Goldwasser, S. Micali, "Probabilistic encryption", Journal of Computer and System Sciences 28 (1984), 270–299.
[^2]: C. Rackoff, D. R. Simon, "Non-interactive zero-knowledge proof of knowledge and chosen ciphertext attack", CRYPTO 1991, LNCS 576, 433–444.
[^3]: S. Micali, C. Rackoff, R. H. Sloan, "The notion of security for probabilistic cryptosystems", SIAM Journal on Computing 17 (1988), 412–426.
[^4]: T. ElGamal, "A public key cryptosystem and a signature scheme based on discrete logarithms", IEEE Transactions on Information Theory 31 (1985), 469–472.
[^5]: Y. Tsiounis, M. Yung, "On the security of ElGamal based encryption", PKC 1998, LNCS 1431, 117–134.
[^6]: M. Bellare, P. Rogaway, "Optimal asymmetric encryption", EUROCRYPT 1994, LNCS 950, 92–111. IND-CCA2 증명은 E. Fujisaki, T. Okamoto, D. Pointcheval, J. Stern, "RSA-OAEP is secure under the RSA assumption", Journal of Cryptology 17 (2004), 81–104.

# 연관 문서

## 선수지식

- [유사난수 생성기](pseudorandom-generators.md)
- [RSA 암호](rsa-cryptosystem.md)

## 더 알아보기

- [망각 전송](oblivious-transfer.md)
- [블록 암호 운용 모드](block-cipher-modes.md)
- [인증 암호화](authenticated-encryption.md)

#cryptography #complexity #number_theory
