# Kolyvagin–Logachev 정리와 겨냥 몫

# 개요

[Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)은 $L$ 함수의 $s=1$ 에서의 소멸 차수가 Mordell–Weil 군의 계수와 같다고 말한다. 이 추측에서 실제로 증명된 것은 해석 순위가 0 이나 1 인 경우의 한쪽 방향뿐이고, 그 증명이 Kolyvagin 의 정리다.

> **정리(Kolyvagin).** $E/\mathbb Q$ 가 [타원곡선](elliptic-curves.md)이고 $L(E,1)\ne0$ 이면 $E(\mathbb Q)$ 가 유한하고 $\text{Ш}(E/\mathbb Q)$ 도 유한하다. $L(E,1)=0$ 이고 $L'(E,1)\ne0$ 이면 $\mathrm{rank}E(\mathbb Q)=1$ 이고 Heegner 점이 유한 지표의 부분군을 생성한다.

Kolyvagin–Logachev 는 이것을 [모듈러 형식](modular-forms.md)에서 만들어지는 아벨 다양체 $A_f$ 로 확장해, 차원이 1 보다 커도 $L(f,1)\ne0$ 이면 $A_f(\mathbb Q)$ 가 유한함을 보인다. 이 일반화로 [모듈러 곡선](modular-curves.md)의 Jacobian 에서 유리점이 유한한 몫을 만들 수 있다.

그 몫이 **겨냥 몫**이다. $J_0(N)$ 에서 $L(f,1)\ne0$ 인 성분만 남긴 것이므로 Mordell–Weil 군이 유한하고, 모듈러 곡선 위의 점의 개수를 제한한다. [Merel 의 일양 유계성 정리](merel-theorem.md)가 이 제한을 쓴 예다. 해석적 비소멸이 기하적 유한성이 되고, 그 유한성이 산술적 유계를 낳는다.

# 직관

## Euler 계와 Selmer 군

$E(\mathbb Q)$ 가 유한함은 Selmer 군이 작음에서 나온다. [Euler 계](euler-systems.md)에서는 서로 다른 준위의 코호몰로지류들이 노름 관계로 묶여 있고, 그 관계로 각 소수마다 국소 조건을 하나씩 죽이면 Selmer 군의 크기가 줄어든다.

Kolyvagin 이 쓴 Euler 계는 허수이차체 위의 [Heegner 점](heegner-points.md)이다. 이 점들이 만드는 유도류를 소수를 하나씩 추가하며 얻고, 각각이 Selmer 군에 제약을 건다. 제약을 충분히 모으면 Selmer 군이 유한하다.

## 첫 원소의 비소멸

Euler 계가 정보를 주려면 첫 원소가 0 이 아니어야 하고, 그 비소멸이 해석적 조건에서 온다.

- 해석 순위 0 은 $L(E,1)\ne0$ 인 경우다. 겨냥 원소의 성분이 0 이 아니라는 [모듈러 기호](modular-symbols.md) 쪽 사실과 같다.
- 해석 순위 1: Gross–Zagier 공식이 Heegner 점의 정준 높이를 $L'(E,1)$ 로 계산해 준다. $L'\ne0$ 이면 높이가 0 이 아니므로 그 점이 무한위수다.

$L$ 함수의 비소멸이 Euler 계의 첫 원소를 주고, Euler 계가 Selmer 군의 크기를 제한한다. 두 단계를 잇는 것이 Gross–Zagier 공식과 모듈러 기호의 계산이다.

## 순위 2 의 한계

Heegner 점은 한 점만 준다. 계수가 2 이상이면 독립인 점을 둘 이상 만들어야 하는데 그런 구성이 없어서 이 방법은 순위 1 에서 멈춘다.

# 정의

## 겨냥 몫

$X_0(N)$ 의 모듈러 기호 $e=\lbrace 0,\infty\rbrace$ 가 정하는 Hecke [아이디얼](ideals-quotient-rings.md) $I_e=\mathrm{Ann}\_{\mathbb T}(e)$ 로 몫을 취한 아벨 다양체

$$
J_e=J_0(N)\big/I_eJ_0(N)
$$

를 **겨냥 몫**이라 한다. 새형식 $f$ 가 $J_e$ 에 나타날 필요충분조건은 $L(f,1)\ne0$ 이다. 모듈러 기호의 성분 크기가 $L(f,1)$ 에 비례하기 때문이다.

## Kolyvagin–Logachev 정리

$f$ 가 준위 $N$ 의 새형식이고 $A_f$ 가 대응하는 모듈러 아벨 다양체일 때

$$
L(f,1)\ne0\ \Longrightarrow\ A_f(\mathbb Q)\ \text{유한},\quad \text{Ш}(A_f/\mathbb Q)\ \text{유한}
$$

$J_e$ 는 그런 $A_f$ 들로만 이루어지므로 $J_e(\mathbb Q)$ 가 유한하고, 아래의 응용이 여기에 기댄다.

# 성질

## 증명의 구조

1. 허수이차체 $K$ 를 Heegner 가설을 만족하도록 고른다.
2. $X_0(N)$ 의 Heegner 점들을 $K$ 의 류체 탑 위에서 모아 Euler 계를 만든다.
3. 유도류를 만들어 Selmer 군의 각 국소 조건을 제어한다.
4. 첫 원소의 비소멸을 Gross–Zagier 또는 $L(f,1)\ne0$ 에서 확보한다.
5. Selmer 군의 유한성에서 Mordell–Weil 과 $\text{Ш}$ 의 유한성을 읽는다.

모듈러성, 복소곱셈, 류체론, Galois 코호몰로지가 한 증명 안에서 차례로 쓰인다.

## 증명된 범위

| 해석 순위 | 결과 |
| --- | --- |
| 0 | 대수 순위 0, $\text{Ш}$ 유한 (Kolyvagin) |
| 1 | 대수 순위 1, $\text{Ш}$ 유한, Heegner 점이 생성 |
| $\ge2$ | 증명되지 않음[^2] |
| BSD(Birch–Swinnerton-Dyer) 공식의 정확한 등식 | 순위 0, 1 에서도 부분적 |

순위와 계수가 같다는 것까지가 알려진 범위이고, $\text{Ш}$ 의 위수와 주기와 조절자를 포함한 정확한 공식은 특정 상황에서만 증명되어 있다. 대수 순위가 0 이면 $L(E,1)\ne0$ 이라는 반대 방향은 증명되지 않았다[^2].

## 계산적 의미

$L(E,1)$ 은 수치적으로 계산하고 0 인지 판정할 수 있으므로 Kolyvagin 의 정리가 순위를 계산으로 확정하는 도구가 된다. 순위 0 판정이 하강 계산보다 빠른 경우가 많고, $\text{Ш}$ 의 유한성이 보장되므로 하강이 끝난다. 타원곡선 데이터베이스의 순위 항목 상당수가 이 경로로 확정되었다.

# 활용

## 모듈러 곡선의 유리점

겨냥 몫의 유리점이 유한하다는 사실이 모듈러 곡선 위의 점을 가둔다. 곡선이나 그 대칭곱에서 $J_e$ 로 보낸 뒤 상이 유한집합에 들어감을 보이고 그 유한집합을 조사하면 점의 목록이 나온다. Mazur 이후의 유리점 연구가 이 방법을 쓴다.

## 일양 유계성

Merel 의 증명은 위 사실을 차수 $d$ 점에 적용한다. 대칭곱 $X_1(p)^{(d)}$ 에서 겨냥 몫으로 보내고 [Hecke 작용소](hecke-operators.md)로 단사성을 판정한 뒤 유리점의 유한성에서 모순을 끌어낸다. 겨냥 몫이 $\mathbb Q$ 위에 있으므로 체를 바꾸지 않고 모든 차수 $d$ 체를 한꺼번에 다룬다.

## Iwasawa 이론과의 대조

Kolyvagin 의 Euler 계가 Selmer 군의 크기를 위에서 누르는 데 비해 [Iwasawa 주추측](iwasawa-main-conjecture.md)은 특성 아이디얼의 등식을 준다. 두 접근은 Euler 계와 $L$ 값이라는 같은 재료를 쓰고 목표가 다르며, 타원곡선의 Iwasawa 주추측 증명에서 Kolyvagin 의 방법이 한쪽 포함관계를 담당한다. 부등식 둘을 양쪽에서 만나게 하는 것이 이 분야의 표준 전략이다.[^1]

[^1]: V. A. Kolyvagin, *Finiteness of $E(\mathbb Q)$ and $\text{Ш}(E,\mathbb Q)$ for a subclass of Weil curves*, Izv. Akad. Nauk SSSR (1988), 그리고 V. A. Kolyvagin, D. Yu. Logachev, *Finiteness of the Shafarevich–Tate group and the group of rational points for some modular abelian varieties*, Leningrad Math. J. 1 (1990). 해설은 B. Gross, *Kolyvagin's work on modular elliptic curves* (1991) 와 K. Rubin, *Euler Systems* (2000). 겨냥 몫의 정의와 성질은 L. Merel 의 1996 년 논문 2 절에 있다.
[^2]: A. Wiles, *The Birch and Swinnerton-Dyer Conjecture*, Clay Mathematics Institute 공식 문제 설명. BSD 추측 가운데 순위 0 과 1 에서 알려진 부분과 남은 부분을 정리한다. https://www.claymath.org/wp-content/uploads/2022/06/birchswin.pdf

# 연관 문서

## 선수지식

- [Euler 계와 Kolyvagin 유도류](euler-systems.md)
- [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)

## 더 알아보기

- [Merel 의 일양 유계성 정리](merel-theorem.md)

#number_theory #algebra #theorem
