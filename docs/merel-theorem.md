# Merel 의 일양 유계성 정리

# 개요

**Merel 의 일양 유계성 정리(Merel's uniform boundedness theorem)** 는 수체의 차수 $d$ 만 고정하면 그 수체 위 [타원곡선](elliptic-curves.md)의 비틀림군의 크기가 $d$ 에만 의존하는 상수로 유계라는 정리다. 이차체 $\mathbb Q(\sqrt m)$ 은 $m$ 마다 다르고 무한히 많으므로, 이차체마다 비틀림군이 유한하다는 것만으로는 모든 이차체에 통하는 상한이 나오지 않는다. 정리는 비틀림점을 모듈러 곡선 위의 차수 $d$ 인 점으로 바꾸고, 그런 점의 유한성으로 모든 차수 $d$ 수체에 공통인 상수를 준다.

# 직관

$\mathbb Q$ 위의 타원곡선에서 유한 위수 점들은 [Mazur 의 비틀림점 정리](eisenstein-ideal.md)에 따라 15 가지 군 가운데 하나를 이루고, 점의 위수는 $12$ 이하다. 이차체로 가면 위수 $13$ 이나 $18$ 인 점을 가진 타원곡선이 나온다. 이차체 하나마다 비틀림군은 유한하지만 이차체는 무한히 많으므로, 체를 바꿔 가며 위수가 한없이 커질 수 있는지 묻는다.

위수 $p$ 인 점을 가진 타원곡선 $E/K$ 는 [모듈러 곡선](modular-curves.md) $X_1(p)$ 의 $K$ 점 하나에 대응한다. $X_1(p)$ 는 $\mathbb Q$ 위에서 정의된 곡선이므로, $K$ 가 이차체이면 이 점은 $\mathbb Q$ 위의 곡선 $X_1(p)$ 위에서 좌표가 이차 무리수인 점, 곧 차수 $2$ 인 점이다. 무한히 많은 이차체에 대한 물음이 곡선 $X_1(p)$ 하나 위의 차수 $2$ 인 점에 대한 물음으로 바뀐다.

그러므로 $p$ 가 크면 $X_1(p)$ 에 첨점이 아닌 차수 $d$ 인 점이 없음을 보이면 된다. Merel 은 이것을 증명해 차수 $d$ 수체 전체에 통하는 상한을 얻었다.

# 정의

## 일양 유계성

$$
B(d)=\sup\big\lbrace\vert E(K)\_{\mathrm{tors}}\vert\thinspace :\thinspace [K:\mathbb Q]=d,\thinspace E/K\ \text{타원곡선}\big\rbrace
$$

로 둔다. $B(d)\lt\infty$ 이면 차수 $d$ 수체 위 타원곡선의 비틀림이 **일양 유계(uniformly bounded)** 라 한다. $d=1$ 이면 가장 큰 비틀림군이 $\mathbb Z/2\times\mathbb Z/8$ 이므로 $B(1)=16$ 이고, $d=2$ 이면 $\mathbb Z/2\times\mathbb Z/12$ 가 가장 커서 $B(2)=24$ 다.

## 겨냥 원소와 겨냥 몫

$X_0(p)$ 의 [호몰로지](homology.md)에서 첨점 $0$ 과 $\infty$ 를 잇는 경로가 정하는 원소

$$
e=\lbrace 0,\infty\rbrace\in H_1\big(X_0(p),\mathbb Q\big)
$$

를 **겨냥 원소(winding element)** 라 한다. Hecke 대수 $\mathbb T$ 에서 $e$ 를 소멸시키는 [아이디얼](ideals-quotient-rings.md) $I_e$ 로 Jacobian $J_0(p)$ 의 몫을 취한

$$
J_e=J_0(p)/I_eJ_0(p)
$$

를 **겨냥 몫(winding quotient)** 이라 한다. $p=11$ 이면 $X_0(11)$ 의 종수가 $1$ 이고 $J_0(11)$ 은 타원곡선 하나이며, 그 $L$ 함수가 $L(1)\ne0$ 을 만족하므로 $I_e=0$ 이고 $J_e=J_0(11)$ 이다.

# 성질

## 정리의 진술

모든 $d\ge1$ 에 대해 $B(d)\lt\infty$ 다.[^1] 동치로, 차수 $d$ 수체 위의 타원곡선이 위수 $p$ 인 점을 가지면 $p$ 는 $d$ 에만 의존하는 상수 이하다.

## 증명의 요지

차수 $d$ 인 점은 Galois 켤레 $d$ 개를 모아 $d$ 차 대칭곱 $X_1(p)^{(d)}$ 의 유리점으로 다룬다. 이 대칭곱을 유리점이 유한한 [아벨 다양체](abelian-varieties.md)로 보내고, 그 사상이 첨점의 상 근처에서 단사임을 보이면 첨점이 아닌 차수 $d$ 인 점이 없다는 것이 나온다.

[모듈러 기호](modular-symbols.md)의 기본 사실로 새형식 $f$ 에 대한 $e$ 의 성분은 $L(f,1)$ 에 비례하므로, $J_e$ 에는 $L(f,1)\ne0$ 인 성분만 나타난다. [Kolyvagin–Logachev 정리](kolyvagin-logachev.md)에 따라 이런 성분의 Mordell–Weil 군은 유한하므로 $J_e(\mathbb Q)$ 는 유한하다.

남는 것은 $X_1(p)^{(d)}\to J_e$ 의 단사성이다. 이것은 Kamienny 판정(Kamienny's criterion)으로 [Hecke 작용소](hecke-operators.md)를 겨냥 원소에 적용한 $T_1e,\dots,T_de$ 가 일차독립인지로 판정된다. 독립이면 차수 $d$ 인 점이 존재할 수 없다. Merel 은 $p$ 가 $d$ 에 비해 충분히 크면 이 독립성이 성립함을 명시적으로 보였다.

모듈러 곡선과 Jacobian 은 언제나 $\mathbb Q$ 위에 있고, 체가 바뀌는 것은 점의 차수뿐이다. 그래서 해석적 도구를 $\mathbb Q$ 위에서만 쓰고도 모든 차수 $d$ 수체를 한꺼번에 다룬다.

## 명시적 상한

Merel 의 원 논문은 $p\lt d^{3d^{2}}$ 를 준다. Oesterlé 가 같은 방법을 다듬어

$$
p\le\big(3^{d/2}+1\big)^{2}
$$

까지 내렸고, Parent 가 소수 멱 $p^{n}$ 에 대한 유계로 확장했다. $d=1$ 에서 Oesterlé 의 식은 $p\le(3^{1/2}+1)^{2}\approx7.46$ 을 주어 Mazur 의 $p\le7$ 과 맞는다.

## 차수별 목록

| 차수 | 나타나는 비틀림군 |
| --- | --- |
| $d=1$ | 15 개 군 (Mazur) |
| $d=2$ | 26 개 군 (Kamienny, Kenku–Momose) |
| $d=3$ | 목록 결정 (Derickx–Etropolski–van Hoeij–Morrow–Zureick-Brown) |

$B(d)$ 의 상한은 $d$ 의 [지수함수](exponential-function.md)이고, 허수곱(complex multiplication, CM)을 갖는 곡선에서 크기가 $d\log\log d$ 규모인 비틀림군이 나타난다. 정리는 상수의 존재를 주지만 어떤 군이 나타나는지는 정하지 않는다. 목록을 얻으려면 $p$ 마다 $X_1(p)^{(d)}$ 의 유리점을 결정해야 한다.

# 활용

- 계산 수론. 타원곡선 데이터베이스에서 비틀림군을 확정할 때 후보 위수가 유한하므로 탐색이 끝난다. $d\le 3$ 에서는 명시적 목록으로 판정하고, 더 높은 차수에서는 Oesterlé 상한이 탐색 범위를 준다. [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)(BSD) 공식의 비틀림 항이 이 정보를 쓴다.
- Galois 표현의 일양성. $E/K$ 가 CM 이 아닐 때 $p$ 가 $d$ 에만 의존하는 상수보다 크면 법 $p$ [Galois 표현](galois-representations.md)이 전사인지를 묻는 Serre 의 일양성 문제(Serre's uniformity question)가 같은 계열의 물음이다.[^2]
- 모듈러 곡선의 유리점 문제. 대칭곱으로 올리고, $L$ 값의 비소멸로 유한한 몫을 만들고, Hecke 작용소의 선형대수로 단사성을 판정하는 세 단계가 이후 같은 꼴의 문제에서 쓰였다.

[^1]: L. Merel, *Bornes pour la torsion des courbes elliptiques sur les corps de nombres*, Invent. Math. **124** (1996), 437–449. 상한 개선은 J. Oesterlé 의 미출판 원고와 P. Parent, J. reine angew. Math. **506** (1999). $d=2$ 는 S. Kamienny, Invent. Math. **109** (1992) 와 M. Kenku, F. Momose, Nagoya Math. J. **109** (1988). $d=3$ 은 M. Derickx, A. Etropolski, M. van Hoeij, J. Morrow, D. Zureick-Brown, Algebra & Number Theory (2021).
[^2]: J-P. Serre, "Propriétés galoisiennes des points d'ordre fini des courbes elliptiques", Inventiones Mathematicae 15 (1972), 259–331. §4.3 이 일양성 문제를 제기하며 답이 없음을 밝힌다.

# 연관 문서

## 선수지식

- [Eisenstein 아이디얼과 Mazur 의 비틀림점 정리](eisenstein-ideal.md)
- [모듈러 기호](modular-symbols.md)
- [Kolyvagin–Logachev 정리](kolyvagin-logachev.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #theorem
