# Temperley–Lieb 대수

# 개요

Temperley–Lieb 대수 $TL_k(\delta)$ 는 교차하지 않는 짝짓기 도형이 만드는 대수다. 생성원 $e_1,\dots,e_{k-1}$ 과 관계

$$
e_i^2=\delta e_i,\qquad e_ie\_{i\pm 1}e_i=e_i,\qquad e_ie_j=e_je_i\ (\vert i-j\vert\ge 2)
$$

로 주어지고 차원은 [Catalan 수](catalan-numbers.md) $C_k$ 다. [Brauer 대수](brauer-algebras.md)의 도형에서 선이 교차하는 것을 버린 부분대수다. $\delta=2\cos(\pi/\ell)$ 인 값에서 반단순성이 깨진다.

# 직관

$\mathrm{SL}\_2$ 가 $V=\mathbb C^2$ 에 작용할 때 $\mathrm{End}\_{\mathrm{SL}\_2}(V^{\otimes k})$ 를 도형으로 적는다. $V$ 에는 반대칭 형식 $\omega$ 가 있어 $V\cong V^\ast$ 이므로 위쪽 첨자와 아래쪽 첨자를 구별하지 않고 $2k$ 개 점의 짝짓기로 불변 사상을 적을 수 있다. 짝짓기 도형은 $(2k-1)!!$ 개다.

$k=2$ 에서 세어 보면 도형이 $3$ 개인데 $\mathrm{End}\_{\mathrm{SL}\_2}(V^{\otimes 2})$ 는 $V\otimes V\cong V\_{(2)}\oplus V\_{(0)}$ 에서 $2$ 차원이다. 하나가 남는다. 남는 것은 세 도형 가운데 선이 교차하는 도형이고, 교차 도형이 나머지 둘의 선형결합으로 적힌다. $\omega$ 에 대한 Plücker 항등식

$$
\omega(a,b)\thinspace\omega(c,d)-\omega(a,c)\thinspace\omega(b,d)+\omega(a,d)\thinspace\omega(b,c)=0
$$

의 세 항이 세 도형이고, 이 한 줄의 관계가 교차를 교차 없는 두 도형으로 바꾼다.

교차를 전부 풀어 쓸 수 있으므로 교차하지 않는 도형만 남겨도 같은 공간을 생성한다. 교차하지 않는 $2k$ 점의 짝짓기는 $C_k$ 개이고, $k=2$ 에서 $C_2=2$ 가 위 차원과 맞는다. 도형을 쌓을 때 생기는 닫힌 고리는 $\dim V=2$ 를 곱해 치우므로 매개변수 $\delta$ 가 $2$ 로 특수화된 것이 이 경우다.

# 정의

## 평면 도형

위줄에 $1,\dots,k$ , 아래줄에 $1',\dots,k'$ 를 놓고 $2k$ 개 점을 둘씩 짝지어 선으로 잇는다. 선이 띠 안에서 서로 교차하지 않게 그릴 수 있는 짝짓기를 **평면 도형**이라 하고, 그런 짝짓기는 $C_k$ 개다.

## 곱셈

도형 $d_1$ 을 $d_2$ 위에 쌓고 $d_1$ 의 아래줄과 $d_2$ 의 위줄을 같은 점으로 본다. 가운데 줄에서 양 끝이 모두 닫힌 고리가 $c$ 개 생기고 위아래에 평면 도형 $d_3$ 가 남으면

$$
d_1d_2=\delta^{c}\thinspace d_3
$$

로 정의한다. 이 곱으로 평면 도형들이 $C_k$ 차원 대수를 만들고 이것이 $TL_k(\delta)$ 다. $\delta$ 는 가환환의 임의의 원소로 둘 수 있다.

## 생성원과 관계

$e_i$ 는 $i$ 와 $i+1$ 을 잇고 $i'$ 와 $(i+1)'$ 를 잇고 나머지 $j$ 는 $j'$ 와 수직으로 잇는 도형이다. $TL_k(\delta)$ 는 $e_1,\dots,e_{k-1}$ 로 생성되고 개요의 세 관계가 완전한 관계계다. 첫 관계는 $e_i$ 를 두 번 쌓을 때 고리 하나가 생기는 것이고, 둘째는 $e_ie\_{i+1}e_i$ 를 쌓으면 고리 없이 $e_i$ 가 돌아오는 것이다.

# 성질

## Brauer 대수의 부분대수

평면 도형은 Brauer 도형 가운데 교차가 없는 것이므로 $TL_k(\delta)\subset B_k(\delta)$ 가 부분대수다. 곱셈 규칙이 양쪽에서 같은 식이고 평면 도형의 곱이 다시 평면 도형이라 닫힘이 성립한다. 차원은 $C_k$ 와 $(2k-1)!!$ 로 $k=3$ 에서 $5$ 와 $15$ 다.

## 반단순성의 조건

> **정리.** $\delta\notin\lbrace 2\cos(\pi j/\ell):2\le\ell\le k,\thinspace 1\le j\lt \ell\rbrace$ 이면 $TL_k(\delta)$ 는 반단순이다[^1].

증명의 요지. Jones–Wenzl 멱등원 $f_1,f_2,\dots$ 을 $f_1=1$ 과 점화식

$$
f\_{m+1}=f_m-\frac{\lbrack m\rbrack\_q}{\lbrack m+1\rbrack\_q}f_me_mf_m
$$

으로 세운다. $\lbrack m\rbrack\_q=(q^m-q^{-m})/(q-q^{-1})$ 이고 $\delta=q+q^{-1}$ 이다. $\lbrack m+1\rbrack\_q\ne 0$ 인 동안 점화식이 정의되고 $f_m$ 들이 기약 성분을 분리한다. $\lbrack \ell\rbrack\_q=0$ 은 $q$ 가 원시 $2\ell$ 제곱근, 곧 $\delta=2\cos(\pi/\ell)$ 인 경우이고 여기서 분모가 사라져 멱등원이 끊긴다.

## 세포 구조

$TL_k(\delta)$ 는 [세포대수](cellular-algebras.md)다[^2]. 세포 가군 $W\_{k,r}$ 은 아래줄로 내려가지 않는 선이 $r$ 개인 반쪽 도형들이 만들고 차원은 $\binom{k}{(k-r)/2}-\binom{k}{(k-r)/2-1}$ 이다. 반단순인 경우 세포 가군이 그대로 기약이고, 차원의 제곱을 $r$ 에 대해 더하면 $C_k$ 가 나온다.

## 땋임군의 표현

$\sigma_i\mapsto q^{1/2}-q^{-1/2}e_i$ 로 두면 [땋임군](braid-groups.md) $B_k$ 의 생성원이 $TL_k(\delta)$ 안에서 땋임 관계를 만족한다[^1]. $\delta=q+q^{-1}$ 에서 $\sigma_i$ 가 가역이고 $\sigma_i\sigma\_{i+1}\sigma_i=\sigma\_{i+1}\sigma_i\sigma\_{i+1}$ 이 성립한다. 이 표현을 Jones 표현이라 한다.

# 활용

## Jones 다항식

[매듭 불변량](knot-invariants.md)의 Jones 다항식을 땋임 낱말의 Markov 대각합으로 계산한다[^1]. 매듭을 땋임으로 적고 Jones 표현으로 $TL_k(\delta)$ 의 원소를 얻은 뒤, 세포 구조가 주는 대각합을 취하면 Markov 이동에 불변인 값이 나온다. 평면 도형의 수가 $C_k$ 로 유한하므로 이 계산이 유한 차원 선형대수가 된다.

## $\mathrm{SL}\_2$ 불변 사상

$\mathrm{End}\_{\mathrm{SL}\_2}(V^{\otimes k})$ 의 기저가 평면 도형이고 $\delta=2$ 에서 $TL_k(2)$ 가 이 대수로 전사한다. $k$ 차 텐서의 불변 사상을 나열하는 문제의 답 목록이 교차하지 않는 짝짓기다. Jones–Wenzl 멱등원 $f_k$ 는 최고무게 성분 $V\_{(k)}$ 로의 사영이다.

## 격자 모형의 전달행렬

6-vertex 모형과 Potts 모형의 전달행렬이 $TL_k(\delta)$ 안에서 적힌다[^3]. $\delta$ 는 Potts 모형의 상태 수 $Q$ 에 $\delta=\sqrt Q$ 로 대응하고, 전달행렬이 $e_i$ 들의 곱과 합으로 쓰이므로 모형의 분배함수가 대수의 표현론으로 계산된다.

## 분할 대수와의 관계

[분할 대수](partition-algebras.md)에서 블록 크기를 $2$ 로 제한하고 교차를 금지한 것이 평면 도형이다. 분할 대수는 비평면 Potts 모형을 다루려고 Temperley–Lieb 대수의 제약을 푼 구성으로 나왔다[^3].

[^1]: 원논문은 H. N. V. Temperley, E. H. Lieb, *Relations between the percolation and colouring problem and other graph-theoretical problems associated with regular planar lattices*, Proc. Roy. Soc. London A **322** (1971), 251–280. 반단순성 조건과 Jones–Wenzl 멱등원은 H. Wenzl, *On sequences of projections*, C. R. Math. Rep. Acad. Sci. Canada **9** (1987), 5–9. Jones 표현과 Jones 다항식은 V. F. R. Jones, *A polynomial invariant for knots via von Neumann algebras*, Bull. Amer. Math. Soc. **12** (1985), 103–111.

[^2]: 세포대수 구조는 J. Graham, G. Lehrer, *Cellular algebras*, Invent. Math. **123** (1996), 1–34.

[^3]: 격자 모형과 분할 대수로의 확장은 P. Martin, *Temperley–Lieb algebras for nonplanar statistical mechanics — the partition algebra construction*, J. Knot Theory Ramifications **3** (1994), 51–82.

# 연관 문서

## 선수지식

- [Catalan 수](catalan-numbers.md)
- [Brauer 대수](brauer-algebras.md)

## 더 알아보기

- [Jones–Wenzl 멱등원](jones-wenzl-idempotents.md)

#algebra #combinatorics #topology #group_theory
