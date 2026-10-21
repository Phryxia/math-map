# 분기 이론

# 개요

**분기 이론(bifurcation theory)** 은 매개변수 $\lambda$ 를 가진 방정식 $F(\lambda,x)=0$ 의 해가 어느 매개변수 값에서 갈라져 나오는지를 다루는 이론이다. [역함수 정리](inverse-function-theorem.md)의 음함수 정리가 성립하는 자리에서는 해가 갈라지지 않으므로 분기는 그 정리가 실패하는 자리에서만 일어난다. 실패하는 자리 가운데 실제로 해가 갈라지는 곳은 [Leray–Schauder 차수](leray-schauder-degree.md)의 변화로 판정한다.

# 직관

실수 방정식 $x^3-\lambda x=0$ 을 본다. $\lambda\le 0$ 이면 해는 $x=0$ 하나이고, $\lambda\gt 0$ 이면 $x=0,\pm\sqrt\lambda$ 세 개다. $\lambda$ 가 $0$ 을 지나는 순간 해 $x=0$ 에서 두 해가 새로 갈라져 나온다.

$x$ 에 대한 도함수는 $3x^2-\lambda$ 이고 $(\lambda,x)=(0,0)$ 에서 $0$ 이다. 도함수가 $0$ 이 아닌 곳에서는 음함수 정리로 해가 $\lambda$ 의 함수 하나로만 이어지므로, 갈라짐이 일어날 수 있는 곳은 도함수가 $0$ 인 곳뿐이다.

도함수가 $0$ 이라고 해가 갈라지는 것은 아니다. $x^3+\lambda^2x=0$ 은 $(0,0)$ 에서 도함수가 $0$ 이지만 모든 $\lambda$ 에서 해가 $x=0$ 하나다. 두 경우를 가르는 것은 해 $x=0$ 에서 함수가 증가하는지 감소하는지다. $x^3-\lambda x$ 는 $\lambda\lt 0$ 이면 $0$ 에서 증가하고 $\lambda\gt 0$ 이면 감소하지만, $x^3+\lambda^2x$ 는 언제나 증가한다.

구간 $\lbrack -1,1\rbrack$ 위의 차수는 영점마다 증가하면 $+1$, 감소하면 $-1$ 을 더한 값이고 $\lambda$ 를 조금 움직여도 바뀌지 않는다. $x^3-\lambda x$ 에서 $x=0$ 의 몫은 $\lambda$ 가 $0$ 을 지날 때 $+1$ 에서 $-1$ 로 바뀐다. 전체가 $+1$ 로 남으려면 $+1$ 을 더하는 영점 두 개가 새로 생겨야 하고, 그것이 $\pm\sqrt\lambda$ 다.

# 정의

$X$ 를 [Banach 공간](banach-spaces.md), $F\colon\mathbb R\times X\to X$ 를 연속사상이라 하고 모든 $\lambda$ 에서 $F(\lambda,0)=0$ 이라 하자. $\lbrace(\lambda,0)\rbrace$ 를 자명한 해의 가지(trivial branch)라 한다.

$(\lambda_0,0)$ 의 모든 근방에 $x\ne 0$ 이고 $F(\lambda,x)=0$ 인 $(\lambda,x)$ 가 있으면 $(\lambda_0,0)$ 을 **분기점(bifurcation point)** 이라 한다.

## 특성값

이 문서에서는 주로 다음 꼴을 다룬다.

$$
F(\lambda,x)=x-\lambda Lx-N(\lambda,x)
$$

$L\colon X\to X$ 는 콤팩트 선형작용소이고, $N$ 은 콤팩트 사상이며 $\Vert x\Vert\to 0$ 일 때 $\lambda$ 에 대해 균등하게 $N(\lambda,x)=o(\Vert x\Vert)$ 이다. $x=\lambda Lx$ 가 $0$ 이 아닌 해를 가지는 $\lambda$ 를 $L$ 의 **특성값(characteristic value)** 이라 한다. 특성값은 $L$ 의 $0$ 이 아닌 고윳값의 역수다.

# 성질

## 분기의 필요조건

$D_xF(\lambda_0,0)$ 이 가역이면 $(\lambda_0,0)$ 은 분기점이 아니다. 음함수 정리가 $(\lambda_0,0)$ 근방의 해를 $x=g(\lambda)$ 꼴 하나로 정하고, $x=0$ 이 이미 해이므로 $g=0$ 이다. 위 꼴에서 $D_xF(\lambda_0,0)=I-\lambda_0L$ 이므로 분기점의 $\lambda_0$ 은 특성값이어야 한다.

## Krasnosel'skii 정리

$\lambda_0$ 이 홀수 대수적 중복도(algebraic multiplicity)를 가진 특성값이면 $(\lambda_0,0)$ 은 분기점이다[^1].

증명의 요지는 직관 절의 계산과 같다. $\lambda$ 가 특성값이 아니면 작은 공 위에서 $I-\lambda L$ 의 Leray–Schauder 차수는 $(-1)^{\beta(\lambda)}$ 이고, $\beta(\lambda)$ 는 $0$ 과 $\lambda$ 사이에 있는 특성값의 대수적 중복도의 합이다. $N$ 이 높은 차수의 항이므로 작은 공 위에서 $F(\lambda,\cdot)$ 의 차수도 같다. $\lambda$ 가 $\lambda_0$ 을 지나면 $\beta$ 가 홀수만큼 바뀌어 차수의 부호가 바뀐다. 분기가 없다면 작은 공의 경계에 해가 없어 호모토피 불변성으로 차수가 일정해야 하므로 모순이다.

중복도가 짝수이면 결론이 성립하지 않을 수 있다. $\mathbb R^2$ 에서 $L=I$ 이고 $N(\lambda,x)$ 가 $x$ 를 $\Vert x\Vert^2$ 만큼 $90^\circ$ 돌린 것이면 $\lambda_0=1$ 은 중복도 $2$ 인 특성값이지만, 방정식 $(1-\lambda)x=N(\lambda,x)$ 의 양변이 서로 직교하므로 둘 다 $0$ 이어야 하고, $0$ 이 아닌 해가 없다.

## Rabinowitz 전역 분기 정리

같은 가정에서 $0$ 이 아닌 해 전체의 폐포 가운데 $(\lambda_0,0)$ 을 포함하는 연결성분 $\mathcal C$ 는 다음 둘 가운데 하나를 만족한다[^2].

- $\mathcal C$ 는 $\mathbb R\times X$ 에서 유계가 아니다.
- $\mathcal C$ 는 $\lambda_0$ 과 다른 특성값 $\hat\lambda$ 에 대해 $(\hat\lambda,0)$ 을 포함한다.

Krasnosel'skii 정리가 분기점 근처의 해만 말하는 데 비해, 이 정리는 갈라져 나온 해의 가지가 중간에 끊기지 않는다고 진술한다.

## Crandall–Rabinowitz 정리

$F$ 가 $C^2$ 이고 $D_xF(\lambda_0,0)$ 의 핵이 $v_0$ 이 생성하는 1 차원 공간, 치역이 여차원 $1$ 이라 하자. 횡단 조건(transversality condition) $D_\lambda D_xF(\lambda_0,0)v_0\notin\mathrm{ran}\thinspace D_xF(\lambda_0,0)$ 이 성립하면, $(\lambda_0,0)$ 근방의 $0$ 이 아닌 해는 한 연속 곡선

$$
s\mapsto(\lambda(s),\thinspace sv_0+o(s)),\qquad\lambda(0)=\lambda_0
$$

위에 있다[^3]. 차수 대신 음함수 정리를 한 번 더 써서 증명하므로, 해의 가지가 하나이고 매끄럽다는 정보까지 준다.

# 활용

- 기둥의 좌굴. 양 끝을 고정한 막대에 압축력 $\lambda$ 를 주면 처짐 $u$ 는 선형화에서 $u''+\lambda u=0$, $u(0)=u(\pi)=0$ 을 만족한다. 특성값 $\lambda=n^2$ 은 모두 단순이므로 Crandall–Rabinowitz 정리로 각 $n^2$ 에서 굽은 해의 가지가 하나씩 갈라져 나온다. 첫 값 $\lambda=1$ 이 Euler 좌굴 하중이다.
- [Sturm–Liouville 문제](sturm-liouville.md)의 비선형 판. 고윳값이 모두 단순이므로 $k$ 번째 고윳값에서 갈라진 가지는 Rabinowitz 정리에 따라 유계가 아니고, 가지 위의 해는 영점을 정확히 $k-1$ 개 가진다.
- [상미분방정식](ordinary-differential-equations.md)의 평형점. $x'=\lambda x-x^3$ 의 평형점은 직관 절의 해이고, $\lambda$ 가 $0$ 을 지나면 $x=0$ 이 안정에서 불안정으로 바뀌고 새 평형점 $\pm\sqrt\lambda$ 가 안정하다.
- 주기해의 분기. 평형점은 그대로 있고 일차 근사의 켤레 복소 고윳값 한 쌍이 허수축을 가로지를 때 주기해가 갈라져 나오는 것이 [Hopf 분기](hopf-bifurcation.md)다.

[^1]: M. Krasnosel'skii, *Topological Methods in the Theory of Nonlinear Integral Equations*, Pergamon (1964), 4장.
[^2]: P. Rabinowitz, Some global results for nonlinear eigenvalue problems, *J. Funct. Anal.* **7** (1971), 487–513.
[^3]: M. Crandall, P. Rabinowitz, Bifurcation from simple eigenvalues, *J. Funct. Anal.* **8** (1971), 321–340.

# 연관 문서

## 선수지식

- [Leray–Schauder 차수](leray-schauder-degree.md)
- [역함수 정리](inverse-function-theorem.md)

## 더 알아보기

- [Hopf 분기](hopf-bifurcation.md)

#functional_analysis #analysis #topology
