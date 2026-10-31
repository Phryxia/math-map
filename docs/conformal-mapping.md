# 등각사상

# 개요

**등각사상(conformal map)** 은 각의 크기와 방향을 보존하는 사상이다. 원판에서 정상 상태의 온도 분포를 구하는 문제는 풀었는데 같은 문제를 띠 모양 영역에서 풀어야 할 때, 영역을 원판으로 옮기면서 곡선 사이의 각을 바꾸지 않는 사상이 있으면 원판의 해를 옮겨 쓸 수 있다. 평면에서는 도함수가 $0$ 이 아닌 정칙함수가 정확히 이런 사상이고, [Riemann 사상정리](riemann-mapping-theorem.md)는 $\mathbb C$ 가 아닌 단순연결 영역이 모두 단위원판으로 옮겨짐을 보인다.

# 직관

[정칙함수](holomorphic-functions.md) $f$ 를 점 $a$ 근방에서 $f(z)\approx f(a)+f'(a)(z-a)$ 로 근사하면, $f'(a)\neq0$ 일 때 사상은 국소적으로 $f'(a)$ 를 곱하는 것이다. [복소수](complex-numbers.md)를 곱하는 것은 회전과 등방 확대이므로 두 곡선이 만나는 각이 그대로 유지된다.

$f(z)=z^2$ 에서 $a=1$ 이면 $f'(1)=2$ 이다. $1$ 을 지나는 수평선과 기울기 $1$ 인 직선은 $45^\circ$ 로 만나고, 두 상은 $1$ 에서 같은 $45^\circ$ 로 만난다. $a=0$ 에서는 $f'(0)=0$ 이고, 실축과 허수축이 이루는 $90^\circ$ 가 상에서 실축의 두 반쪽이 이루는 $180^\circ$ 로 두 배가 된다.

# 정의

## 등각성

영역 $\Omega\subset\mathbb C$ 에서 정칙인 $f$ 가 $a\in\Omega$ 에서 $f'(a)\neq0$ 이면 $f$ 는 $a$ 에서 **등각(conformal)** 이다. $\Omega$ 의 모든 점에서 등각이고 단사이면 $f$ 를 $\Omega$ 위의 **등각사상** 이라 한다. $e^z$ 는 도함수가 $0$ 이 되지 않아 모든 점에서 등각이지만 $e^{z+2\pi i}=e^z$ 라 $\mathbb C$ 위에서 단사가 아니다. 띠 $\lbrace 0\lt\mathrm{Im}\thinspace z\lt\pi\rbrace$ 위에서는 단사이므로 등각사상이고, 상은 상반평면이다.

두 영역 $\Omega_1,\Omega_2$ 사이에 전단사 등각사상이 있으면 둘을 **등각동치(conformally equivalent)** 라 한다. 위의 띠와 상반평면은 $e^z$ 로 등각동치다. 역사상도 자동으로 정칙이므로 이 관계는 [동치관계](equivalence-relations.md)다.

## Möbius 변환

$$T(z)=\frac{az+b}{cz+d},\qquad ad-bc\neq0$$

꼴의 사상을 **Möbius 변환(Möbius transformation)** 이라 한다. Riemann 구면(Riemann sphere) $\widehat{\mathbb C}=\mathbb C\cup\lbrace\infty\rbrace$ 의 전단사 등각사상은 정확히 Möbius 변환이고, 합성에 대해 군을 이루며 $\mathrm{PGL}\_2(\mathbb C)$ 와 동형이다.

Möbius 변환은 원과 직선을 원과 직선으로 옮기고, 서로 다른 세 점을 지정한 서로 다른 세 점으로 옮기는 변환이 유일하게 하나 있다. Cayley 변환 $T(z)=(z-i)/(z+i)$ 는 $i$ 를 $0$ 으로, 실축을 단위원으로 보내고 상반평면을 단위원판으로 옮긴다.

# 성질

## Schwarz 보조정리

Schwarz 보조정리(Schwarz lemma). $\mathbb D=\lbrace z:\vert z\vert\lt 1\rbrace$ 에서 정칙이고 $f(\mathbb D)\subset\mathbb D$ , $f(0)=0$ 인 $f$ 는 모든 $z\in\mathbb D$ 에서

$$\vert f(z)\vert\le\vert z\vert,\qquad \vert f'(0)\vert\le1$$

을 만족한다. 어느 한 점에서 등호가 성립하면 $f(z)=e^{i\theta}z$ 인 회전이다.

증명은 최대 절댓값 원리(maximum modulus principle)다. $g(z)=f(z)/z$ 는 $0$ 에서 제거 가능한 특이점을 가지므로 $\mathbb D$ 에서 정칙이고, 반지름 $r$ 의 원 위에서 $\vert g\vert\le1/r$ 이다. $r\to1$ 로 보내면 $\vert g\vert\le1$ 이다.

## 원판의 자기동형군

$\mathbb D$ 의 전단사 등각사상은 정확히

$$\varphi(z)=e^{i\theta}\thinspace\frac{z-a}{1-\bar az},\qquad a\in\mathbb D,\thinspace \theta\in\mathbb R$$

꼴이다. Schwarz 보조정리를 $\varphi$ 와 그 역에 함께 적용해 얻는다. 이 군이 쌍곡평면의 등거리변환군이므로 원판 위의 Poincaré 계량(Poincaré metric)이 등각사상으로 보존된다.

## Riemann 사상정리

$\Omega\subsetneq\mathbb C$ 가 공집합이 아닌 단순연결 영역이면 $\Omega$ 는 $\mathbb D$ 와 등각동치다[^1]. 지정한 점 $z_0\in\Omega$ 를 $0$ 으로 보내고 $f'(z_0)\gt 0$ 이라는 정규화를 걸면 사상은 유일하다. 증명은 도함수를 최대로 하는 단사 정칙함수를 찾는 극값 문제이고, [Montel 정리](montel-theorem.md)와 [Hurwitz 정리](hurwitz-theorem.md)를 쓴다.

정리는 사상의 존재만 주고 명시적 공식을 주지 않는다. Liouville 정리(Liouville's theorem)로 $\mathbb C$ 에서 $\mathbb D$ 로 가는 정칙함수는 유계 전해석함수라 상수뿐이므로, $\mathbb C$ 자체는 제외된다.

# 활용

- [조화함수](harmonic-functions.md): 조화성은 등각사상으로 보존된다. 임의의 단순연결 영역의 [Dirichlet 문제](dirichlet-problem.md)를 원판으로 옮겨 Poisson 공식으로 푼다.
- [균일화 정리](riemann-surfaces.md): Riemann 사상정리의 곡면판이다. 모든 단순연결 Riemann 곡면은 구면, 평면, 원판 셋 중 하나와 등각동치다.
- [모듈러 형식](modular-forms.md): 상반평면 위의 $\mathrm{SL}\_2(\mathbb Z)$ 작용이 Möbius 변환이고, 그 몫이 [모듈러 곡선](modular-curves.md)이다.
- [쌍곡 3차원 다양체](hyperbolic-3-manifolds.md): $\widehat{\mathbb C}$ 의 Möbius 변환군이 쌍곡 3차원 공간의 등거리변환군과 같아서, 무한원 구면 위의 등각구조가 다양체의 기하를 결정한다.

[^1]: W. Rudin, *Real and Complex Analysis*, 3rd ed., 14.8절.

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)

## 더 알아보기

- [Riemann 사상정리](riemann-mapping-theorem.md)
- [Riemann 곡면](riemann-surfaces.md)

#complex_analysis #analysis #topology #differential_geometry
