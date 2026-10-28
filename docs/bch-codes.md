# BCH 부호

# 개요

**BCH 부호(Bose–Chaudhuri–Hocquenghem code)** 는 전송 중 뒤집힌 비트를 미리 정한 개수까지 찾아 고칠 수 있도록 데이터에 검사 비트를 붙이는 부호다. 길이 $15$ 인 이진 BCH 부호 하나는 데이터 $7$ 비트에 검사 비트 $8$ 개를 붙여, $15$ 비트 가운데 어느 두 비트가 뒤집혀도 원래 데이터를 되찾는다. BCH 부호는 부호어를 다항식으로 보고 원소가 $16$ 개인 체에서 정한 연속한 근들을 갖도록 요구해, 고칠 수 있는 오류의 개수를 근의 개수로 보장한다.

# 직관

BCH 부호는 $\mathbb F_q$ 위의 길이 $n$ 순환 부호 가운데, 확대체 $\mathbb F\_{q^m}$ 의 $1$ 의 원시 $n$ 제곱근 $\beta$ 에 대해 연속한 거듭제곱 $\beta^b,\beta^{b+1},\dots,\beta^{b+\delta-2}$ 를 모두 근으로 갖는 다항식들로 이루어진 부호다. $\delta$ 를 설계 거리(designed distance)라 하고, 최소거리는 $\delta$ 이상이다.[^1][^2]

[Reed–Solomon 부호](reed-solomon-codes.md)는 기호가 $\mathbb F\_{q^m}$ 의 원소이고, BCH 부호는 그 가운데 성분이 모두 $\mathbb F_q$ 에 있는 부호어만 모은 것이다. 이진 BCH 부호는 길이 $2^m-1$ 에서 오류 $t$ 개를 패리티 비트 $mt$ 개 이하로 고친다.

$\mathbb F\_{16}$ 위의 길이 $15$ Reed–Solomon 부호에서 $c(\alpha)=c(\alpha^2)=c(\alpha^3)=c(\alpha^4)=0$ 인 부호어는 오류 $2$ 개를 고친다. 여기서 $\alpha$ 는 $\mathbb F\_{16}^\times$ 의 생성원이다. 이진 비트로 보내려면 성분이 $0$ 과 $1$ 뿐인 부호어만 쓴다.

성분이 $\mathbb F_2$ 에 있으면 $c(x)^2=c(x^2)$ 이다. 계수가 $a^2=a$ 를 만족하고, 표수 $2$ 에서 $(u+v)^2=u^2+v^2$ 이기 때문이다. 그래서 $c(\alpha)=0$ 이면 $c(\alpha^2)=c(\alpha)^2=0$ 이고 $c(\alpha^4)=0$ 도 따라온다. 네 조건 가운데 실제로 요구할 것은 $c(\alpha)=0$ 과 $c(\alpha^3)=0$ 둘뿐이다.

$\alpha$ 의 $\mathbb F_2$ 위 최소다항식 $x^4+x+1$ 과 $\alpha^3$ 의 최소다항식 $x^4+x^3+x^2+x+1$ 의 곱 $g(x)$ 는 차수가 $8$ 이다. $g$ 의 배수인 차수 $14$ 이하의 이진 다항식 전체가 부호이고, 매개변수는 $[15,7,5]$ 다. 근 넷 가운데 둘만 조건으로 남아 패리티 비트가 $16$ 이 아니라 $8$ 개다.

# 정의

$\gcd(n,q)=1$ 이고 $m$ 은 $q^m\equiv 1\pmod n$ 인 가장 작은 정수다. $\beta\in\mathbb F\_{q^m}$ 은 위수 $n$ 인 원소다. $\mathbb F_q$ 위의 길이 $n$ 다항식을 $c(x)=\sum_{i=0}^{n-1}c_ix^i$ 로 쓰고, $c(x)$ 와 $xc(x)\bmod(x^n-1)$ 이 함께 부호어인 선형부호를 **순환 부호(cyclic code)** 라 한다.

$\beta^j$ 의 $\mathbb F_q$ 위 최소다항식을 $M\_j(x)$ 로 쓴다. 설계 거리 $\delta\ge 2$ 의 BCH 부호는 생성 다항식

$$
g(x)=\mathrm{lcm}\bigl(M\_b(x),M\_{b+1}(x),\dots,M\_{b+\delta-2}(x)\bigr)
$$

의 배수 전체다. 곧 $c(\beta^j)=0$ ($j=b,\dots,b+\delta-2$) 인 $c\in\mathbb F_q\lbrack x\rbrack/(x^n-1)$ 전체다. $b=1$ 이면 좁은 의미(narrow-sense) BCH 부호, $n=q^m-1$ 이면 원시(primitive) BCH 부호라 한다.

$M\_j$ 의 근은 [유한체](finite-fields.md)의 Frobenius 사상이 만드는 켤레 $\beta^j,\beta^{jq},\beta^{jq^2},\dots$ 이다. 그러므로 $g$ 는 집합 $\lbrace b,\dots,b+\delta-2\rbrace$ 를 $q$ 배 곱셈으로 닫은 지수 집합 $Z$ 위의 $\prod_{j\in Z}(x-\beta^j)$ 와 같다.

# 성질

## BCH 한계

**정리.** 설계 거리 $\delta$ 의 BCH 부호의 최소거리는 $\delta$ 이상이다.

증명의 요지. 무게 $w\le\delta-1$ 인 부호어 $c$ 가 자리 $i\_1,\dots,i\_w$ 에서만 $0$ 이 아니라고 하자. $c(\beta^j)=0$ 을 $j=b,\dots,b+w-1$ 에서 쓰면 미지수 $c\_{i\_1},\dots,c\_{i\_w}$ 에 대한 $w$ 개의 식이 나오고, 계수 행렬은 $\beta^{bi\_\ell}$ 로 열을 나누면 서로 다른 $\beta^{i\_\ell}$ 의 Vandermonde 행렬이다. 행렬식이 $0$ 이 아니므로 $c=0$ 이다.

## 차원

$Z$ 의 원소마다 $M\_j$ 의 차수는 $m$ 이하이므로 차원은 $n-\vert Z\vert\ge n-m(\delta-1)$ 이다. 이진 좁은 의미 부호에서는 짝수 지수 $2j$ 가 $j$ 의 켤레이므로 $\delta=2t+1$ 일 때 홀수 지수 $1,3,\dots,2t-1$ 의 최소다항식만 남고, 차원이 $n-mt$ 이상이다.

## Reed–Solomon 부호와의 관계

$n=q^m-1$ 이면 $\mathbb F\_{q^m}$ 위에서 $c(\beta^j)=0$ ($j=b,\dots,b+\delta-2$) 인 부호는 매개변수 $[n,n-\delta+1,\delta]$ 의 Reed–Solomon 부호다. BCH 부호는 이 부호와 $\mathbb F_q^n$ 의 교집합이다. 이런 부호를 부분체 부분부호(subfield subcode)라 한다. 최소거리가 $\delta$ 이상인 것은 Reed–Solomon 부호에서 물려받고, 차원은 $n-\delta+1$ 에서 $n-\vert Z\vert$ 로 줄어든다.

## 복호

신드롬 $S\_j=r(\beta^j)\in\mathbb F\_{q^m}$ ($j=b,\dots,b+\delta-2$) 을 계산하고, Reed–Solomon 부호와 같이 [Berlekamp–Massey 알고리즘](berlekamp-massey.md)으로 오류 위치 다항식을 구해 근을 찾는다. 이진 부호에서는 오류 값이 모두 $1$ 이므로 오류 값을 구하는 단계가 없고, $S\_{2j}=S\_j^2$ 이므로 홀수 지수의 신드롬만 계산한다.

# 활용

- **Hamming 부호.** 이진 원시 좁은 의미 BCH 부호에서 $\delta=3$ 이면 $g=M\_1$ 이고, 길이 $2^m-1$ 의 Hamming 부호 $[2^m-1,2^m-1-m,3]$ 이 나온다. [오류정정부호](error-correcting-codes.md)의 Hamming 부호는 BCH 부호의 특수 사례다.
- **플래시 메모리.** NAND(not-AND) 플래시의 페이지마다 이진 BCH 부호의 패리티를 덧붙여 읽기 오류 수십 비트를 고친다. 오류가 고르게 흩어진 비트 오류여서 기호 단위의 Reed–Solomon 부호보다 비트 단위의 BCH 부호가 맞는다.
- **위성 방송.** 디지털 위성 방송 표준 DVB-S2(Digital Video Broadcasting – Satellite – Second Generation)는 안쪽에 저밀도 패리티 검사 부호를 두고 바깥쪽에 BCH 부호를 두어, 안쪽 복호가 남긴 소수의 비트 오류를 바깥쪽이 고친다.

[^1]: A. Hocquenghem, "Codes correcteurs d'erreurs", *Chiffres* 2 (1959), 147–156. R. C. Bose, D. K. Ray-Chaudhuri, "On a class of error correcting binary group codes", *Information and Control* 3 (1960), 68–79.
[^2]: F. J. MacWilliams, N. J. A. Sloane, *The Theory of Error-Correcting Codes*, North-Holland, 1977.

# 연관 문서

## 선수지식

- [Reed–Solomon 부호](reed-solomon-codes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #field_theory #algorithms
