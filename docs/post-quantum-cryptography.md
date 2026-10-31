# 격자 기반 후양자 암호

# 개요

**격자 기반 후양자 암호(lattice-based post-quantum cryptography)** 는 [격자](lattices.md) 문제의 어려움에 안전성을 두어 양자 컴퓨터로도 깨지지 않도록 설계한 공개키 암호다. 지금 인터넷에서 쓰는 공개키 암호는 큰 수를 소인수분해하기 어렵다는 데 기대는데, 양자 컴퓨터가 만들어지면 이 분해가 빠르게 끝나 암호가 깨진다. 격자 기반 후양자 암호는 일차연립방정식에 작은 잡음을 더해 풀기 어렵게 만든 문제로 그 가정을 바꾼다.

# 직관

[RSA 암호](rsa-cryptosystem.md)는 소인수분해가, Diffie–Hellman 키 교환과 [타원곡선](elliptic-curves.md) 암호는 [이산로그](discrete-logarithm.md) 계산이 어렵다는 데 안전성을 둔다. [Shor 알고리즘](shor-algorithm.md)은 양자 컴퓨터에서 두 문제를 모두 다항시간에 푼다. 그래서 공개 정보로는 풀기 어렵고 비밀을 아는 사람은 쉽게 푸는 다른 문제가 있어야 한다.

법 $17$ 의 일차연립방정식은 쉽게 풀린다. 비밀 $s=(s_1,s_2)$ 에 대해 $s_1+2s_2\equiv 13$, $2s_1+s_2\equiv 11$ 이 공개되면, 둘째 식에서 첫째 식의 두 배를 빼 $-3s_2\equiv 11-26=-15$ 를 얻고 $s_2=5$, $s_1=3$ 이 나온다. 이것이 [Gauss 소거법](gaussian-elimination.md)이고 미지수가 수백 개여도 다항시간에 끝난다.

오른쪽 값에 작은 잡음을 더해 첫째 식을 $14$ 로, 둘째 식을 $11$ 로 공개한다. 첫째 식의 잡음은 $1$, 둘째 식의 잡음은 $0$ 이다. 같은 소거를 하면 $-3s_2\equiv 11-28=-17\equiv 0$ 이므로 $s_2=0$, $s_1=14$ 가 나오고, 참값 $(3,5)$ 와 전혀 다르다. 첫째 식을 두 배 하고 $-3$ 으로 나누는 동안 잡음 $1$ 이 $-2\cdot(-3)^{-1}\equiv 12$ 로 커졌다. 미지수가 많으면 소거 단계가 늘어 잡음이 법 전체에 퍼지고, 결과는 참값에 대한 정보를 담지 않는다.

$s=(3,5)$ 를 아는 사람에게는 이 잡음이 문제가 되지 않는다. 공개된 값에서 각 식의 왼쪽 값을 빼면 $14-13=1$, $11-11=0$ 처럼 작은 수가 남고, 그 크기만 보면 된다. 공개 정보로는 소거가 막히고 비밀로는 뺄셈 한 번이면 되는 이 차이를 암호에 쓴다.

# 정의

이하에서 $q$ 는 법, $n$ 은 비밀의 차원, $\chi$ 는 $\mathbb Z_q$ 위의 좁은 확률분포다. 보통 $\chi$ 는 폭 $\sigma\ll q$ 인 이산 Gauss 분포(discrete Gaussian distribution)다.

## LWE

비밀 $s\in\mathbb Z_q^n$ 를 고정한다. **LWE**(learning with errors) 표본은 $a\leftarrow\mathbb Z_q^n$ 를 균등하게, $e\leftarrow\chi$ 를 뽑아 만든 쌍이다.

$$
(a,\ \langle a,s\rangle+e \bmod q)
$$

- **탐색 LWE(search LWE)** 는 표본을 원하는 만큼 보고 $s$ 를 복원하는 문제다.
- **판정 LWE(decision LWE)** 는 표본들이 위 분포에서 왔는지, $\mathbb Z_q^{n+1}$ 의 [균등분포](uniform-distribution.md)에서 왔는지 구별하는 문제다.

직관 절의 예는 $q=17$, $n=2$, $s=(3,5)$ 이고 잡음이 $\lbrace -1,0,1\rbrace$ 에서 나오는 경우다. 표본 $((1,2),14)$ 와 $((2,1),11)$ 의 잡음은 $1$ 과 $0$ 이다. 셋째 표본으로 $a=(4,4)$, 잡음 $-1$ 을 뽑으면 $\langle a,s\rangle=32\equiv 15$ 이므로 $((4,4),14)$ 다. 탐색 LWE 는 이 세 표본에서 $(3,5)$ 를 찾는 문제다.

## SIS

**SIS**(short integer solution)는 균등한 $A\in\mathbb Z_q^{n\times m}$ 이 주어질 때 다음을 만족하는 짧은 비영 정수벡터 $z$ 를 찾는 문제다.

$$
Az=0 \bmod q,\qquad 0\lt\Vert z\Vert\le\beta
$$

위 세 표본의 $a$ 를 열로 놓은 $2\times 3$ 행렬을 보자.

$$
A=\begin{pmatrix}1&2&4\cr 2&1&4\end{pmatrix}
$$

$z=(3,3,2)$ 는 $3+6+8=17$, $6+3+8=17$ 이므로 $Az\equiv 0$ 이고 $\Vert z\Vert=\sqrt{22}\lt 5$ 다. $\beta=5$ 이면 이 $z$ 가 SIS 의 해다.

## 구조화된 변형

**Ring-LWE** 는 $\mathbb Z_q^n$ 대신 다항식환 $R_q=\mathbb Z_q[x]/(x^n+1)$ 의 원소로 표본을 만드는 LWE 다. $a,s\in R_q$ 이고 표본은 $(a,\ as+e)$ 다.

$q=17$, $n=2$ 에서 $a=1+2x$, $s=3+5x$ 이면 $x^2=-1$ 이므로 $as=3+11x-10\equiv 10+11x$ 다. 이 곱은 [행렬](matrices.md) $\begin{pmatrix}1&-2\cr 2&1\end{pmatrix}$ 을 $(3,5)$ 에 곱한 것과 같아, 다항식 $a$ 하나가 LWE 표본 두 개의 $a$ 를 정한다.

**Module-LWE** 는 $R_q$ 위의 작은 차원 [가군](modules.md) $R_q^d$ 의 원소로 표본을 만드는 LWE 다. $d=1$ 이면 Ring-LWE 이고, $R_q=\mathbb Z_q$ 이면 원래의 LWE 다.

## Regev 암호

**Regev 암호(Regev encryption)** 는 공개키 $(A,b=As+e)$ 로 비트 $\mu\in\lbrace 0,1\rbrace$ 를 암호화하는 방식이다. 표본 첨자의 무작위 부분집합 $S$ 를 골라 다음 $(u,v)$ 를 보낸다.

$$
u=\sum_{i\in S}a_i,\qquad v=\sum_{i\in S}b_i+\mu\Big\lfloor\frac q2\Big\rfloor
$$

복호는 $v-\langle u,s\rangle$ 를 계산해 $0$ 과 $q/2$ 중 가까운 쪽을 고른다.

위 세 표본으로 $\mu=1$ 을 보내며 $S=\lbrace 1,3\rbrace$ 를 고르면 $u=(5,6)$, $v=14+14+8=36\equiv 2$ 다. 비밀을 아는 사람은 $\langle u,s\rangle=45\equiv 11$ 이므로 $2-11\equiv 8$ 을 얻고, $8$ 은 $0$ 보다 $q/2$ 에 가까우므로 $\mu=1$ 이다. $\mu=0$ 을 $S=\lbrace 1,2\rbrace$ 로 보내면 $u=(3,3)$, $v=25\equiv 8$ 이고 $\langle u,s\rangle=24\equiv 7$ 이므로 $8-7=1$ 이 $0$ 에 가까워 $\mu=0$ 이다.

# 성질

## 숨은 부분군 문제와 양자 알고리즘

Shor 알고리즘은 $f(x)=g^x \bmod p$ 처럼 아벨군 위에서 정의된 함수의 주기를 양자 [Fourier 변환](fourier-transform.md)으로 읽는다. 소인수분해와 이산로그는 모두 유한 아벨군의 숨은 부분군 문제(hidden subgroup problem)로 적힌다.

[최단벡터 문제](shortest-vector-problem.md)의 근사판인 근사 SVP(shortest vector problem)도 숨은 부분군 문제로 적히지만 나오는 군이 아벨이 아닌 이면체군(dihedral group)이다. 이면체군의 숨은 부분군 문제에는 다항시간 양자 알고리즘이 알려져 있지 않고, 준지수 시간의 Kuperberg 알고리즘이 알려진 최선이며 격자 파라미터에 직접 적용되지 않는다[^1]. 근사 SVP 의 최선 알고리즘은 고전이든 양자든 $2^{\Theta(n)}$ 시간을 쓰고 양자가 주는 이득은 지수의 상수배다.

## 잡음과 격자

LWE 를 격자로 쓰면 $A$ 가 정하는 격자에서 $b$ 에 가장 가까운 점을 찾는 CVP(closest vector problem)다. 잡음이 없으면 $b$ 가 격자 위에 있고, 잡음이 있으면 $b$ 는 격자점에서 조금 떨어진다.

## 탐색과 판정의 동치

$q$ 가 다항 크기의 소수면 판정 LWE 를 푸는 알고리즘에서 탐색 LWE 를 푸는 알고리즘이 나온다. $s$ 의 첫 좌표를 $0,1,\dots,q-1$ 로 추측해 그만큼 보정한 표본을 만들면 추측이 맞을 때만 LWE 분포가 유지되고 틀리면 균등해진다. 좌표마다 $q$ 번 시도하므로 다항 횟수다.

[의미론적 안전성](semantic-security.md)은 암호문이 균등한 무작위와 구별되지 않을 것을 요구하므로 암호 구성은 판정판을 쓴다. 이 동치로 안전성 증명은 판정판으로 하고 어려움의 근거는 탐색판으로 든다.

## SIS 의 해의 존재

$m\gt n\log_2 q$ 이면 $\lbrace 0,1\rbrace^m$ 의 벡터 $2^m$ 개가 $\mathbb Z_q^n$ 의 $q^n$ 개 값으로 가므로 [비둘기집 원리](pigeonhole-principle.md)로 $Az=Az'$ 인 서로 다른 둘이 있다. $z-z'$ 은 성분이 $\lbrace -1,0,1\rbrace$ 인 해다. 해는 존재하지만 찾기가 어렵다. LWE 는 암호화에, SIS 는 서명과 해시에 쓰인다.

## 최악 경우 환산

Regev 가 2005 년에 증명한 정리는 평균적인 LWE 사례를 푸는 알고리즘에서 모든 $n$ 차원 격자의 근사 SVP 를 다항 근사비로 푸는 양자 알고리즘을 만든다. Peikert 가 법 $q$ 를 지수적으로 키우는 대가로 고전 환산을 얻었다.

RSA 에서는 소수가 특수한 꼴이면 인수분해가 쉬워지듯 무작위로 뽑은 키가 약한 사례일 위험이 있다. 격자에서는 무작위 사례가 최악 사례만큼 어려우므로 이 위험이 없다.

환산의 상수와 근사비 때문에 정리를 그대로 쓴 파라미터는 비실용적으로 크다. 실무 파라미터는 아래의 공격 비용 추정으로 정한다.

## 구조화된 변형의 효율

평문 LWE 의 공개키는 $n\times m$ 행렬이라 크기가 $n^2$ 급이다. Ring-LWE 는 키가 $n$ 개 계수로 줄고, 수론 변환(number theoretic transform)으로 곱셈이 $O(n\log n)$ 에 끝난다. 수론 변환은 [고속 Fourier 변환](fft.md)을 [유한체](finite-fields.md)에서 한 것이다. Module-LWE 는 환의 차수를 고정한 채 가군 차수 $d$ 만 바꿔 보안 수준을 조절한다.

구조는 효율을 올리지만 공격 표면도 늘린다. 이상 격자(ideal lattice)에 특화된 공격이 일부 파라미터에서 성공한 전례가 있다.

## 잡음 예산

Regev 암호의 잔차 $v-\langle u,s\rangle$ 는 $\mu\lfloor q/2\rfloor+\sum_{i\in S}e_i$ 이므로, 오차의 합이 $q/4$ 보다 작으면 정확히 복호된다. 위 예에서 $S=\lbrace 1,3\rbrace$ 의 오차 합은 $1-1=0$, $S=\lbrace 1,2\rbrace$ 의 오차 합은 $1$ 이고 둘 다 $17/4$ 보다 작다. 잡음이 작으면 LWE 가 쉬워지므로 파라미터 선택은 두 요구 사이의 창을 찾는 일이다.

표본 $m$ 개 가운데 무작위 부분집합을 고르면 평균 $m/2$ 개의 오차가 더해진다. 각 오차가 $|e_i|\le B$ 이면 누적 오차가 $mB/2$ 규모이므로 복호 조건은

$$
\frac{mB}2\lt\frac q4
$$

이다. 표준 키 교환 ML-KEM(module-lattice key encapsulation mechanism)이 쓰는 법 $q=3329$ 와 표본 수 $m=128$ 에서 $B=2$ 이면 왼쪽이 $128$ 이라 한계 $832$ 에 크게 못 미치고, $B=200$ 이면 $12800$ 으로 한계를 넘어 복호가 자주 틀린다.

잡음을 키우면 LWE 가 어려워지는 대신 이 창이 닫힌다. 창을 넓히는 표준적인 방법이 $q$ 를 키우는 것인데, 같은 안전성에 필요한 차원 $n$ 도 함께 커진다.

## 덧셈 준동형과 완전동형암호

암호문끼리 더하면 평문이 더해진다. $(u_1+u_2,v_1+v_2)$ 의 잔차가 두 오차의 합이므로 잡음 예산이 남아 있는 한 복호가 된다.

곱셈까지 지원하도록 확장한 것이 [완전동형암호](homomorphic-encryption.md)다. 곱셈은 오차를 제곱 규모로 키워 몇 단계 만에 예산을 고갈시키므로, 암호화된 상태에서 복호 회로를 평가해 오차를 초기화하는 재부팅(bootstrapping)을 쓴다.

## 공격과 파라미터 추정

실무 파라미터는 두 공격의 비용으로 정해진다.

- 원시 공격(primal attack): $(A,b)$ 에서 $b$ 가 격자에 아주 가깝다는 사실을 이용해 CVP 를 푼다.
- 쌍대 공격(dual attack): 쌍대격자(dual lattice)의 짧은 벡터를 찾아 $b$ 와 내적을 취하고, 분포가 균등한지 치우쳤는지로 판정한다.

둘 다 격자 축소(lattice reduction)로 환원되므로 비용이 BKZ(block Korkine–Zolotarev) 축소의 블록 크기 $\beta$ 로 결정된다. $\beta$ 차원 SVP 를 $2^{0.292\beta}$ (고전) 또는 $2^{0.265\beta}$ (양자) 시간에 푼다고 가정하고 목표 보안 수준을 주는 $\beta$ 를 역산한다. 이 상수가 개선될 여지가 있어 파라미터에 여유를 둔다.

# 활용

## 표준과 실제 배치

NIST(National Institute of Standards and Technology)가 2024 년에 세 표준을 확정했다. 키 교환용 ML-KEM(CRYSTALS-Kyber)과 서명용 ML-DSA(module-lattice digital signature algorithm, CRYSTALS-Dilithium)가 Module-LWE 와 그 SIS 판에 기반하고, 이름의 M 이 module 이다. 여기서 CRYSTALS 는 Cryptographic Suite for Algebraic Lattices 다. 서명용 SLH-DSA(stateless hash-based digital signature algorithm, SPHINCS+)는 해시 기반이다. Falcon 계열이 뒤이어 표준화되었다.

ML-KEM-768 의 공개키는 1184 바이트로 타원곡선의 32 바이트보다 크다. 연산은 다항식 곱과 덧셈만 쓰고 큰 수 모듈러 거듭제곱이 없어 더 빠르다.

현장 배치는 혼합 방식이다. 기존 타원곡선 키 교환과 ML-KEM 을 함께 수행해 두 비밀을 결합하므로 격자 가정이 무너져도 기존 안전성이 남는다. TLS(transport layer security)와 Signal 이 이 형태로 전환했다.

## 저장 후 복호 공격

오늘 오간 암호문을 저장해 두었다가 양자컴퓨터가 나온 뒤 복호할 수 있다. 20 년 뒤에도 비밀이어야 하는 데이터는 지금 후양자 암호로 보호해야 한다.

서명은 검증이 실시간에 일어나므로 저장 공격이 통하지 않고 양자컴퓨터가 나타난 뒤에 바꿔도 된다. 펌웨어 서명처럼 오래 사는 신뢰 근원은 예외다.

## 격자에서만 나오는 구성

신원 기반 암호(identity-based encryption), 속성 기반 암호(attribute-based encryption), 함수 암호(functional encryption), 난독화(obfuscation) 후보가 격자 위에서 구성되었다. 공통 원리는 짧은 기저가 함정문(trapdoor)이고 그 함정문을 위임할 수 있다는 것이다. 완전동형암호도 여기 든다.

## 안전성 가정의 한계

최악 경우 환산은 실무보다 훨씬 큰 파라미터에서만 적용되고 구조화된 변형에는 온전히 적용되지 않는다. 구현에서는 이산 Gauss 표본 추출과 거부 표본 추출(rejection sampling)이 부채널 공격(side-channel attack)에 취약하고, 서명 구현의 실제 사고가 대부분 여기서 일어났다.

대안 계열을 함께 유지한다. 해시 기반 서명은 [해시 함수](cryptographic-hash-functions.md)의 안전성만 가정하므로 가장 보수적이고, 부호 기반과 동종사상(isogeny) 기반이 격자와 독립적인 가정을 준다. 2022 년 [초특이 동종사상 그래프](supersingular-isogeny-graphs.md) 위의 키 교환인 SIDH(supersingular isogeny Diffie–Hellman)가 고전 알고리즘으로 깨졌다.

[^1]: G. Kuperberg, "A subexponential-time quantum algorithm for the dihedral hidden subgroup problem", SIAM Journal on Computing 35 (2005), 170–188. 이면체군 숨은 부분군 문제의 $2^{O(\sqrt{\log N})}$ 알고리즘. https://arxiv.org/abs/quant-ph/0302112

# 연관 문서

## 선수지식

- [최단벡터 문제](shortest-vector-problem.md)
- [이산로그](discrete-logarithm.md)

## 더 알아보기

- [완전동형암호](homomorphic-encryption.md)

#cryptography #computation #linear_algebra
