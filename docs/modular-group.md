# 모듈러 군

# 개요

**모듈러 군(modular group)** 은 정수 성분이고 행렬식이 $1$ 인 $2\times 2$ 행렬들이 상반평면에 [Möbius 변환](mobius-transformations.md)으로 작용하는 군이다. 평면의 [격자](lattices.md)는 기저 벡터 $1$ 과 $\tau$ 로 그릴 수 있는데, $\tau=0.3+0.4i$ 와 $\tau=-0.2+1.6i$ 는 다른 기저인데도 크기만 다르고 모양이 같은 격자를 준다. 모듈러 군은 같은 모양의 격자를 주는 $\tau$ 들을 한 궤도로 모으고, 각 궤도에서 대표 하나를 고르는 영역을 준다.

# 직관

$\tau=0.3+0.4i$ 일 때 격자 $\Lambda=\mathbb Z+\mathbb Z\tau$ 의 가장 짧은 벡터는 길이 $0.5$ 인 $\tau$ 이고, $1$ 은 그보다 길다. 격자 전체를 $\tau$ 로 나누면 모양은 그대로이고, 가장 짧은 벡터가 $1$ 이 되며 다른 기저 벡터는 $1/\tau$ 가 된다. 방향을 맞추어 $-1/\tau$ 로 쓰면 다음이 나온다.

$$
-\frac1\tau=-\frac{0.3-0.4i}{0.25}=-1.2+1.6i
$$

기저 $1$, $-1.2+1.6i$ 에서 둘째 벡터에 $1$ 을 더해도 같은 격자를 만든다. 그러면 $\tau'=-0.2+1.6i$ 다. 이제 $\vert\tau'\vert\ge 1$ 이고 $\vert\mathrm{Re}\thinspace\tau'\vert\le 1/2$ 이므로, $1$ 이 가장 짧은 벡터이고 $\tau'$ 는 $1$ 과 독립인 벡터 가운데 가장 짧다. 처음 격자에서 이 벡터는 $\tau\cdot\tau'=\tau-1$ 에 해당하고 길이는 $0.806$ 이다.

이 계산에서 쓴 두 동작은 $\tau\mapsto -1/\tau$ 와 $\tau\mapsto\tau+1$ 이다. 둘을 되풀이하면 아무 $\tau$ 에서나 $\vert\tau\vert\ge 1$, $\vert\mathrm{Re}\thinspace\tau\vert\le 1/2$ 인 $\tau$ 에 이른다.

# 정의

## 모듈러 군

정수 성분이고 행렬식이 $1$ 인 $2\times 2$ 행렬의 군을 $\mathrm{SL}\_2(\mathbb Z)$ 라 한다. 이 군은 [쌍곡평면](hyperbolic-plane.md) $\mathbb H$ 에 다음과 같이 [작용](group-actions.md)한다.

$$
\begin{pmatrix}a&b\cr c&d\end{pmatrix}\cdot\tau=\frac{a\tau+b}{c\tau+d}
$$

$-I$ 는 모든 점을 고정하므로, 작용이 충실한 몫 $\mathrm{PSL}\_2(\mathbb Z)=\mathrm{SL}\_2(\mathbb Z)/\lbrace\pm I\rbrace$ 를 모듈러 군이라 한다. 다음 두 원소가 직관 절의 두 동작이다.

$$
S=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}:\tau\mapsto-\frac1\tau,\qquad T=\begin{pmatrix}1&1\cr 0&1\end{pmatrix}:\tau\mapsto\tau+1
$$

## 기본 영역

다음 집합 $\mathcal F$ 를 모듈러 군의 **기본 영역(fundamental domain)** 이라 한다.

$$
\mathcal F=\lbrace\tau\in\mathbb H:\vert\tau\vert\ge 1,\ \vert\mathrm{Re}\thinspace\tau\vert\le 1/2\rbrace
$$

직관 절의 $\tau'=-0.2+1.6i$ 는 $\mathcal F$ 에 있고, $\tau=0.3+0.4i$ 는 $\vert\tau\vert\lt 1$ 이라 없다. $\mathcal F$ 는 꼭짓점이 $\rho=e^{2\pi i/3}$, $-\bar\rho=e^{\pi i/3}$, $\infty$ 인 쌍곡 삼각형이다.

# 성질

## 기본 영역 정리

$\mathbb H$ 의 모든 점은 모듈러 군의 원소로 $\mathcal F$ 의 점에 옮겨진다. $\mathcal F$ 의 서로 다른 두 내부점은 같은 궤도에 있지 않다.

증명의 요지. $g$ 의 첫 행이 $(a,b)$, 둘째 행이 $(c,d)$ 이면 $\mathrm{Im}(g\tau)=\mathrm{Im}\thinspace\tau/\vert c\tau+d\vert^2$ 이다. $\vert c\tau+d\vert\le 1$ 인 정수 쌍 $(c,d)$ 는 유한 개이므로 궤도에서 $\mathrm{Im}$ 이 가장 큰 점 $\tau$ 가 있다. $T$ 의 거듭제곱으로 $\vert\mathrm{Re}\thinspace\tau\vert\le 1/2$ 로 옮긴다. 이때 $\vert\tau\vert\lt 1$ 이면 $\mathrm{Im}(S\tau)=\mathrm{Im}\thinspace\tau/\vert\tau\vert^2$ 가 더 커서 최대성에 어긋나므로 $\tau\in\mathcal F$ 다.

## 생성원과 관계

모듈러 군은 $S$ 와 $T$ 로 생성된다. $\mathcal F$ 의 내부점 $\tau\_0$ 과 원소 $g$ 를 잡고, 위 증명의 절차로 $g\tau\_0$ 을 $\mathcal F$ 로 옮기는 $S$, $T$ 의 곱 $w$ 를 만든다. $wg\tau\_0$ 은 $\mathcal F$ 의 점이고 $\tau\_0$ 과 같은 궤도이므로 $\tau\_0$ 이고, 내부점의 안정자는 자명하므로 $g=w^{-1}$ 이다. 행렬로는 $S^2=-I$, $(ST)^3=-I$ 이므로 모듈러 군에서 다음이 성립한다.

$$
S^2=1,\qquad (ST)^3=1
$$

모듈러 군의 관계는 이 둘에서 모두 나오고, 모듈러 군은 위수 $2$ 인 순환군과 위수 $3$ 인 순환군의 자유곱(free product) $\mathbb Z/2\ast\mathbb Z/3$ 과 동형이다[^1].

## 고정점과 첨점

$\mathcal F$ 의 점 가운데 항등이 아닌 원소로 고정되는 것은 $i$ 와 $\rho$, $-\bar\rho$ 뿐이다. $i$ 는 $S$ 가 고정하고 그 안정자군의 위수는 $2$ 다. $\rho$ 는 $ST$ 가 고정하고 안정자군의 위수는 $3$ 이다. $i$ 는 정사각형 격자 $\mathbb Z+\mathbb Zi$ 이고 $\rho$ 는 정삼각형 격자 $\mathbb Z+\mathbb Z\rho$ 이며, 두 격자가 $90^\circ$, $60^\circ$ 회전으로 자기 자신에 겹치는 것이 이 안정자다.

$\mathcal F$ 의 꼭짓점 $\infty$ 는 $\mathbb H$ 의 점이 아니고 실수축의 경계에 있다. 이런 점을 **첨점(cusp)** 이라 하고, $\mathbb Q\cup\lbrace\infty\rbrace$ 의 모든 점이 모듈러 군으로 $\infty$ 에 옮겨진다.

## 넓이

$\mathcal F$ 의 내각은 $\rho$ 와 $-\bar\rho$ 에서 $\pi/3$, $\infty$ 에서 $0$ 이므로 쌍곡평면의 삼각형 넓이 공식으로 넓이가 $\pi-2\pi/3=\pi/3$ 이다. 지수가 $m$ 인 부분군의 기본 영역은 $\mathcal F$ 의 복사본 $m$ 개로 덮이므로 넓이가 $m\pi/3$ 이다.

# 활용

- [모듈러 형식](modular-forms.md): 모듈러 군과 그 [합동 부분군](congruence-subgroups.md)의 작용에 대해 $(c\tau+d)^k$ 만큼 변하는 정칙함수로 정의되고, 기본 영역 정리로 $q$ 전개와 첨점에서의 조건이 정해진다.
- 타원곡선의 분류. 복소수 위의 [타원곡선](elliptic-curves.md)은 격자로 나눈 복소 원환면이고, 같은 곡선을 주는 $\tau$ 들이 모듈러 군의 한 궤도다. 궤도 공간 $\mathbb H/\mathrm{PSL}\_2(\mathbb Z)$ 가 [모듈러 곡선](modular-curves.md)의 가장 간단한 경우다.
- [이진 이차형식](binary-quadratic-forms.md): 판별식이 음인 양의 정부호 형식 $ax^2+bxy+cy^2$ 의 근 $\tau$ 를 기본 영역으로 옮기는 것이 Gauss 의 축약이다.
- [연분수](continued-fractions.md): $\tau\mapsto\tau+1$ 과 $\tau\mapsto -1/\tau$ 의 합성은 연분수 전개의 한 단계다. 두 무리수가 행렬식이 $\pm 1$ 인 정수 행렬의 Möbius 변환으로 서로 옮겨지는 것은 연분수 전개의 꼬리가 같은 것과 동치다. 이것을 Serret 정리(Serret's theorem)라 한다.

[^1]: J.-P. Serre, *A Course in Arithmetic*, Graduate Texts in Mathematics 7, Springer, 1973, Ch. VII §1.

# 연관 문서

## 선수지식

- [쌍곡평면](hyperbolic-plane.md)
- [군 작용](group-actions.md)
- [격자](lattices.md)

## 더 알아보기

- [모듈러 형식](modular-forms.md)
- [합동 부분군](congruence-subgroups.md)
- [Bianchi 군](bianchi-groups.md)

#number_theory #group_theory #complex_analysis
