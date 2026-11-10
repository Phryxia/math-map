# Kolyvagin–Logachev 정리

# 개요

**Kolyvagin–Logachev 정리(Kolyvagin–Logachev theorem)** 는 [모듈러 형식](modular-forms.md)에서 오는 [아벨 다양체](abelian-varieties.md)의 $L$ 함수가 $s=1$ 에서 $0$ 이 아니면 그 다양체의 유리점이 유한 개라는 정리다. [타원곡선](elliptic-curves.md) $y^2=x^3-x$ 처럼 유리수 계수 방정식의 유리수 해가 유한 개인지 무한 개인지는 해를 찾아 나열해서는 판정되지 않는다. 이 정리는 해의 개수 문제를 $L$ 함수의 값 하나가 $0$ 인지 계산하는 문제로 바꿔 판정한다.

# 직관

$E\colon y^2=x^3-x$ 에는 유리점 $(0,0)$, $(1,0)$, $(-1,0)$ 과 무한원점이 있다. 더 찾아도 나오지 않지만, 좌표가 큰 점이 어딘가 있는지는 탐색으로 정해지지 않는다. $E$ 의 $L$ 함수 $L(E,s)$ 는 소수 $p$ 마다 $E$ 를 $p$ 로 나눈 나머지에서 센 점의 개수로 정의되고, $s=1$ 에서의 값을 수치로 계산하면 $0$ 이 아니다.

Kolyvagin 의 정리는 이 경우 $E$ 의 유리점이 유한 개임을 준다. 유한 개의 유리점은 위수가 유한한 점이어서 따로 계산되고, 위의 넷이 전부다.

유리점이 유한 개임을 보이는 도구는 [Selmer 군과 Tate–Shafarevich 군](selmer-tate-shafarevich.md)의 Selmer 군이다. Selmer 군은 유리점 전체를 담는 계산 가능한 군이어서, Selmer 군이 유한하면 유리점도 유한하다. Kolyvagin 은 허수이차체 위의 [Heegner 점과 Gross–Zagier 공식](heegner-points.md)의 Heegner 점에서 코호몰로지류들을 만들고, 그 류마다 Selmer 군에 조건 하나를 더해 Selmer 군을 유한하게 제한했다. 이 류들이 정보를 주려면 첫 원소가 $0$ 이 아니어야 하고, 그것이 $L$ 값의 조건에서 나온다.

# 정의

## 해석적 순위

타원곡선 $E/\mathbb Q$ 의 **해석적 순위(analytic rank)** 는 $L(E,s)$ 의 $s=1$ 에서의 영점의 차수 $r_{\mathrm{an}}=\mathrm{ord}\_{s=1}L(E,s)$ 다. 직관 절의 $y^2=x^3-x$ 는 $L(E,1)\ne0$ 이므로 $r_{\mathrm{an}}=0$ 이다.

## 모듈러 아벨 다양체

$f$ 를 레벨 $N$ 의 무게 $2$ 새형식이라 하자. $f$ 의 [Hecke 작용소](hecke-operators.md) 고윳값들이 생성하는 체를 $K_f$ 라 하면, $J_0(N)$ 의 몫으로 차원이 $\lbrack K_f:\mathbb Q\rbrack$ 인 아벨 다양체 $A_f$ 가 정해진다. 이것을 $f$ 의 **모듈러 아벨 다양체(modular abelian variety)** 라 한다. $K_f=\mathbb Q$ 이면 $A_f$ 는 타원곡선이고, $N=11$ 이면 $A_f=J_0(11)$ 이다.

## 겨냥 몫

$X_0(N)$ 의 [모듈러 기호](modular-symbols.md) $e=\lbrace 0,\infty\rbrace$ 를 소멸시키는 Hecke 대수의 [아이디얼](ideals-quotient-rings.md) $I_e=\mathrm{Ann}\_{\mathbb T}(e)$ 로 몫을 취한 아벨 다양체를 **겨냥 몫(winding quotient)** 이라 한다.

$$
J_e=J_0(N)\big/I_eJ_0(N)
$$

새형식 $f$ 의 $A_f$ 가 $J_e$ 에 나타날 필요충분조건은 $L(f,1)\ne0$ 이다. 모듈러 기호 $e$ 의 $f$ 성분이 $L(f,1)$ 의 상수배이기 때문이다. $N=11$ 이면 $J_0(11)$ 은 타원곡선 하나이고 $L(f,1)\ne0$ 이므로 $J_e=J_0(11)$ 이다.

# 성질

## Kolyvagin 정리

$E/\mathbb Q$ 가 타원곡선이고 $L(E,1)\ne0$ 이면 $E(\mathbb Q)$ 가 유한하고 $\text{Ш}(E/\mathbb Q)$ 도 유한하다. $L(E,1)=0$ 이고 $L'(E,1)\ne0$ 이면 $\mathrm{rank}\thinspace E(\mathbb Q)=1$ 이고, Heegner 점이 생성하는 부분군의 지표가 유한하다[^1]. 이것이 해석적 순위 $0$ 과 $1$ 에서 [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)의 순위 부분이다.

## Kolyvagin–Logachev 정리

Kolyvagin 과 Logachev 는 해석적 순위 $0$ 의 경우를 모듈러 아벨 다양체로 확장했다. $f$ 가 레벨 $N$ 의 새형식이면 다음이 성립한다[^1].

$$
L(f,1)\ne0\thickspace\Longrightarrow\thickspace A_f(\mathbb Q)\thinspace\text{유한},\quad \text{Ш}(A_f/\mathbb Q)\thinspace\text{유한}
$$

$J_e$ 는 이런 $A_f$ 들과 동종이므로 $J_e(\mathbb Q)$ 가 유한하다.

## 증명의 구조

1. 허수이차체 $K$ 를 Heegner 조건을 만족하도록 고른다.
2. $X_0(N)$ 의 Heegner 점들을 $K$ 의 링 유체 위에서 모아 [Euler 계](euler-systems.md)를 만든다.
3. Kolyvagin 유도류(Kolyvagin derivative class)를 만들어 Selmer 군의 국소 조건을 제한한다.
4. 첫 원소가 $0$ 이 아님을 Gross–Zagier 공식이나 $L(f,1)\ne0$ 에서 얻는다.
5. Selmer 군의 유한성에서 Mordell–Weil 군과 $\text{Ш}$ 의 유한성이 유도된다.

증명에 모듈러성, [복소 곱셈](complex-multiplication.md), [유체론](class-field-theory.md), [Galois 코호몰로지](galois-cohomology.md)가 차례로 쓰인다.

## 증명된 범위

| 해석적 순위 | 결과 |
| --- | --- |
| 0 | 대수적 순위 0, Ш 유한 (Kolyvagin) |
| 1 | 대수적 순위 1, Ш 유한, Heegner 점이 지표 유한인 부분군을 생성 |
| 2 이상 | 증명되지 않음[^2] |

BSD(Birch–Swinnerton-Dyer) 공식의 정확한 등식, 곧 $\text{Ш}$ 의 위수와 주기와 조절자를 포함한 등식은 순위 $0$ 과 $1$ 에서도 특정 상황에서만 증명되어 있다. 대수적 순위가 $0$ 이면 $L(E,1)\ne0$ 이라는 역방향은 증명되지 않았다[^2].

Heegner 점은 허수이차체 하나에 점 하나만 주므로, 순위가 $2$ 이상인 경우에 필요한 독립인 점 둘을 이 방법으로는 만들지 못한다.

## 계산적 의미

$L(E,1)$ 은 수치로 계산되고 $0$ 인지 판정할 수 있으므로, Kolyvagin 정리는 순위를 계산으로 확정한다. 순위 $0$ 의 판정은 하강(descent) 계산보다 빠른 경우가 많고, $\text{Ш}$ 의 유한성이 보장되므로 하강 계산이 끝난다.

# 활용

## 모듈러 곡선의 유리점

겨냥 몫의 유리점이 유한하다는 사실로 [모듈러 곡선](modular-curves.md) 위의 유리점을 찾는다. 곡선이나 그 대칭곱을 $J_e$ 로 보내면 유리점의 상이 유한집합에 속하고, 그 유한집합을 조사하면 유리점의 목록이 나온다. Mazur 의 비틀림점 정리 이후의 유리점 연구가 이 방법을 쓴다.

## 일양 유계성

[Merel 의 일양 유계성 정리](merel-theorem.md)의 증명은 이 방법을 차수 $d$ 의 점에 적용한다. 대칭곱 $X_1(p)^{(d)}$ 를 겨냥 몫으로 보내고, Hecke 작용소로 이 사상이 단사인지 판정한 뒤, 유리점의 유한성에서 모순을 유도한다. 겨냥 몫이 $\mathbb Q$ 위에 정의되므로 차수 $d$ 의 모든 체를 한 번에 다룬다.

## Iwasawa 이론과의 대조

Kolyvagin 의 Euler 계는 Selmer 군의 크기에 상계를 주고, [Iwasawa 주추측](iwasawa-main-conjecture.md)은 특성 아이디얼의 등식을 준다. 타원곡선의 Iwasawa 주추측 증명에서 Kolyvagin 의 방법을 일반화한 Kato 의 Euler 계가 한쪽 나눔을 주고, Eisenstein 합동이 반대쪽 나눔을 준다[^1].

[^1]: V. A. Kolyvagin, *Finiteness of* $E(\mathbb Q)$ *and* $\text{Ш}(E,\mathbb Q)$ *for a subclass of Weil curves*, Izv. Akad. Nauk SSSR (1988), 그리고 V. A. Kolyvagin, D. Yu. Logachev, *Finiteness of the Shafarevich–Tate group and the group of rational points for some modular abelian varieties*, Leningrad Math. J. 1 (1990). 해설은 B. Gross, *Kolyvagin's work on modular elliptic curves* (1991) 와 K. Rubin, *Euler Systems* (2000). 겨냥 몫의 정의와 성질은 L. Merel 의 1996 년 논문 2 절에 있다.
[^2]: A. Wiles, *The Birch and Swinnerton-Dyer Conjecture*, Clay Mathematics Institute 공식 문제 설명. BSD 추측 가운데 순위 0 과 1 에서 알려진 부분과 남은 부분을 정리한다. https://www.claymath.org/wp-content/uploads/2022/06/birchswin.pdf

# 연관 문서

## 선수지식

- [Euler 계](euler-systems.md)
- [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)

## 더 알아보기

- [Merel 의 일양 유계성 정리](merel-theorem.md)

#number_theory #algebra #theorem
