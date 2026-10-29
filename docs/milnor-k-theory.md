# Milnor K 이론

# 개요

**Milnor K 이론(Milnor K-theory)** 은 체의 원소 여러 개로 만든 기호 $\lbrace a_1,\dots,a_n\rbrace$ 를 모으되 $\lbrace a,1-a\rbrace=0$ 이라는 관계를 두어 만든 군들의 이론이다. 유리수 $a,b$ 로 정한 [사원수 대수](quaternion-algebras.md) $(a,b)$ 가 행렬 대수인지는 $x^2-ay^2-bz^2=0$ 이 $0$ 아닌 해를 갖는지로 정해지고, $a+b=1$ 이면 $(1,1,1)$ 이 해이므로 언제나 행렬 대수다. Milnor K 이론은 이 관계를 만족하는 기호들로 $K^M_n(F)$ 를 정의하고, $K^M_n(F)/m$ 이 [Galois 코호몰로지](galois-cohomology.md) $H^n(F,\mu_m^{\otimes n})$ 과 같다는 노름 잉여 동형 정리(norm residue isomorphism theorem)로 코호몰로지를 기호로 계산한다.

# 직관

Milnor K 이론은 체 $F$ 에 차수가 붙은 환 $K^M_\ast(F)=\bigoplus_{n\ge0}K^M_n(F)$ 을 대응시키는 이론이다. $K^M_n(F)$ 는 곱셈군 $F^{\times}$ 의 $n$ 겹 텐서곱을 $a\otimes(1-a)$ 꼴의 원소로 나눈 군이다.

Galois 코호몰로지의 컵곱이 이 관계를 만족하므로 $K^M_n(F)/m$ 에서 $H^n(F,\mu_m^{\otimes n})$ 으로 가는 사상이 정의되고, 그 사상이 동형이라는 것이 노름 잉여 동형 정리다.

Galois 코호몰로지의 Kummer 열은 $a\in F^{\times}$ 에 류 $(a)\in H^1(F,\mu_2)$ 를 주고 $H^1(F,\mu_2)\cong F^{\times}/(F^{\times})^{2}$ 이다. 표수가 $2$ 가 아니면 두 류의 컵곱 $(a)\cup(b)$ 는 $H^2(F,\mu_2)\cong\mathrm{Br}(F)\lbrack2\rbrack$ 에 들어가고, 그 원소는 $i^2=a$, $j^2=b$, $ij=-ji$ 로 정한 사원수 대수 $(a,b)$ 의 류다. 사원수 대수가 행렬 대수와 동형인 것은 $x^2-ay^2-bz^2=0$ 이 $0$ 아닌 해를 갖는 것과 동치다.

$b=1-a$ 로 두면 $x=y=z=1$ 에서 $1-a-(1-a)=0$ 이므로 해가 있다. 그래서 모든 $a\ne0,1$ 에서 $(a)\cup(1-a)=0$ 이다. 컵곱은 양쪽 변수에 대해 준동형이므로 $(a,b)\mapsto(a)\cup(b)$ 는 $F^{\times}\otimes F^{\times}$ 에서 정의된 사상이고, $a\otimes(1-a)$ 를 전부 $0$ 으로 보낸다.

$F^{\times}\otimes F^{\times}$ 를 $a\otimes(1-a)$ 들로 나눈 군이 $K^M_2(F)$ 다. 컵곱이 만족하는 관계를 이것 하나만 넣고 만든 군이므로, 컵곱이 이 군에서 Brauer 군으로 가는 사상이 되고, 그 사상이 동형인지를 노름 잉여 동형 정리가 답한다.

# 정의

$F$ 를 체라 한다. $n\ge2$ 에서

$$
K^M_n(F)=\big(F^{\times}\big)^{\otimes n}\Big/\big\langle a_1\otimes\cdots\otimes a_n : \text{어떤 } i\ne j \text{ 에서 } a_i+a_j=1\big\rangle
$$

이고 $K^M_0(F)=\mathbb Z$, $K^M_1(F)=F^{\times}$ 다. 텐서곱은 $\mathbb Z$ 위에서 취한다. $a_1\otimes\cdots\otimes a_n$ 의 류를 **기호(symbol)** $\lbrace a_1,\dots,a_n\rbrace$ 로 쓰고, 군 연산은 덧셈으로 적는다. $\lbrace ab\rbrace=\lbrace a\rbrace+\lbrace b\rbrace$ 이다.

이어 붙이는 곱 $\lbrace a_1,\dots,a_n\rbrace\cdot\lbrace b_1,\dots,b_k\rbrace=\lbrace a_1,\dots,a_n,b_1,\dots,b_k\rbrace$ 로 $K^M_\ast(F)$ 는 차수가 붙은 환이다.[^1]

## 노름 잉여 사상

$m$ 이 $F$ 의 표수와 서로소이면 Kummer 열의 류 $(a)\in H^1(F,\mu_m)$ 의 컵곱으로

$$
h_{n,m}:K^M_n(F)/m\longrightarrow H^n(F,\mu_m^{\otimes n}),\qquad \lbrace a_1,\dots,a_n\rbrace\longmapsto(a_1)\cup\cdots\cup(a_n)
$$

이 정의된다. 이것이 **노름 잉여 사상(norm residue map)** 이다. 직관 절의 계산은 $m=2$ 이고, 일반의 $m$ 에서는 $x^m-a$ 의 근을 붙인 확대의 노름 사상으로 $(a)\cup(1-a)=0$ 을 보인다.

# 성질

## 반가환성

$K^M_\ast(F)$ 에서 $\lbrace a,-a\rbrace=0$ 이고 $\lbrace a,b\rbrace=-\lbrace b,a\rbrace$ 이다. 특히 $\lbrace a,a\rbrace=\lbrace a,-1\rbrace$ 이다.

*증명의 요지.* $a\ne1$ 이면 $-a=(1-a)/(1-a^{-1})$ 이므로 $\lbrace a,-a\rbrace=\lbrace a,1-a\rbrace-\lbrace a,1-a^{-1}\rbrace=0+\lbrace a^{-1},1-a^{-1}\rbrace=0$ 이다. $\lbrace ab,-ab\rbrace=0$ 을 전개하면 $\lbrace a,b\rbrace+\lbrace b,a\rbrace=0$ 이 나온다.

## Matsumoto 정리

**Matsumoto 정리(Matsumoto's theorem).** 체 $F$ 에서 $K^M_2(F)$ 는 [대수적 K 이론](algebraic-k-theory.md)의 $K_2(F)$ 와 같다.[^2]

$n\ge3$ 에서는 같지 않다. $K_3(F)$ 를 $K^M_3(F)$ 의 상으로 나눈 몫이 $K_3^{\mathrm{ind}}(F)$ 다.

## 유한체와 이산 값매김

유한체 $\mathbb F_q$ 에서 $n\ge2$ 이면 $K^M_n(\mathbb F_q)=0$ 이다.[^5]

$F$ 에 이산 값매김 $v$ 가 있고 잉여체가 $k$ 이면 **순한 기호(tame symbol)**

$$
\partial_v\lbrace a,b\rbrace=(-1)^{v(a)v(b)}\frac{a^{v(b)}}{b^{v(a)}}\bmod\mathfrak m_v
$$

가 준동형 $K^M_2(F)\to k^{\times}$ 를 준다. $\mathbb Q$ 의 소수마다 이 사상을 모으면 Tate 의 계산[^5]

$$
K_2(\mathbb Q)\cong\mathbb Z/2\oplus\bigoplus_{p\ne2}\mathbb F_p^{\times}
$$

이 나온다. $\mathbb Z/2$ 성분은 $\lbrace-1,-1\rbrace$ 이 생성하고, [실수](real-numbers.md) 자리에서 $\lbrace a,b\rbrace$ 가 $a,b$ 가 둘 다 음수일 때만 자명하지 않은 것으로 검출된다.

## 노름 잉여 동형 정리

**노름 잉여 동형 정리.** $m$ 이 $F$ 의 표수와 서로소이면 모든 $n$ 에서 $h_{n,m}$ 이 동형이다.

- $n=1$ 은 Kummer 열과 [Hilbert 정리 90](hilbert-theorem-90.md)이다.
- $n=2$ 는 **Merkurjev–Suslin 정리(Merkurjev–Suslin theorem)** 다.[^3] $\mu_m\subseteq F$ 이면 $\mathrm{Br}(F)\lbrack m\rbrack$ 가 순환 대수의 류로 생성된다는 진술과 같다.
- $m=2$ 는 Milnor 가 제기하고 Voevodsky 가 증명했다. [Witt 환](witt-ring.md)의 Milnor 추측은 이 결과 위에서 Orlov, Vishik, Voevodsky 가 증명했다.
- 일반의 $m$ 은 **Bloch–Kato 추측(Bloch–Kato conjecture)** 이라 불렸고 Rost 와 Voevodsky 가 증명했다.[^4]

증명은 동기 코호몰로지(motivic cohomology)에서 $K^M_n(F)$ 를 대각선 차수의 군으로 실현하고, 기호 하나를 그 함수체 위에서 $0$ 으로 만드는 Rost 의 노름 다양체(norm variety)를 쓴다.

# 활용

- Witt 환: Pfister 형식 $\langle\langle a_1,\dots,a_n\rangle\rangle$ 을 대응시키는 사상이 $K^M_n(F)/2\cong I^n/I^{n+1}$ 을 주고, 노름 잉여 사상과 합치면 이차형식의 여과가 $H^n(F,\mathbb Z/2)$ 로 계산된다.
- [Brauer 군](brauer-groups.md): Merkurjev–Suslin 정리로 $\mathrm{Br}(F)\lbrack m\rbrack$ 의 원소가 순환 대수의 곱으로 표현된다.
- 대수적 K 이론: Quillen–Lichtenbaum 추측의 증명이 노름 잉여 동형 정리를 사용한다. 체의 $K_\ast(F)$ 에서 Milnor K 이론의 상은 기호로 생성되는 부분이다.
- [Bloch 군](bloch-group.md): $K_3^{\mathrm{ind}}(F)=K_3(F)/K^M_3(F)$ 를 생성원과 관계로 제시한다.

[^1]: J. Milnor, "Algebraic K-theory and quadratic forms", *Inventiones Mathematicae* 9 (1970), 318–344.
[^2]: H. Matsumoto, "Sur les sous-groupes arithmétiques des groupes semi-simples déployés", *Annales scientifiques de l'École Normale Supérieure* 2 (1969), 1–62.
[^3]: A. S. Merkurjev, A. A. Suslin, "K-cohomology of Severi–Brauer varieties and the norm residue homomorphism", *Izvestiya Akademii Nauk SSSR* 46 (1982), 1011–1046.
[^4]: V. Voevodsky, "On motivic cohomology with Z/l-coefficients", *Annals of Mathematics* 174 (2011), 401–438.
[^5]: J. Milnor, *Introduction to Algebraic K-Theory*, Annals of Mathematics Studies 72, Princeton University Press, 1971, 9장과 11장.

# 연관 문서

## 선수지식

- [Galois 코호몰로지](galois-cohomology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #algebra #number_theory
