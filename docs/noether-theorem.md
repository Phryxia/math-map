# Noether 정리

# 개요

Noether 정리는 작용의 연속 대칭 하나마다 보존량 하나를 준다. [변분법](calculus-of-variations.md)의 Euler–Lagrange 방정식을 풀지 않고도 그 해를 따라 상수인 함수를 Lagrange 함수의 불변성에서 바로 읽는다.

[Hamilton 역학](hamiltonian-mechanics.md) 쪽에서는 같은 대응이 Poisson 괄호의 반대칭으로 적히고, 대칭에서 보존량으로 가는 길과 그 역이 한 식이 된다.

# 직관

자유 입자의 Lagrange 함수 $L(q,\dot q)=\frac12m\dot q^2$ 는 위치를 옮겨도 그대로다. Euler–Lagrange 방정식은 $m\ddot q=0$ 이므로 $m\dot q$ 가 상수다. 두 사실이 같은 계산에서 나온다. $L$ 에 $q$ 가 들어 있지 않으면 $\partial L/\partial q=0$ 이고, Euler–Lagrange 방정식

$$
\frac{d}{dt}\frac{\partial L}{\partial\dot q}=\frac{\partial L}{\partial q}
$$

의 오른쪽이 $0$ 이 되어 $\partial L/\partial\dot q=m\dot q$ 의 시간 미분이 $0$ 이다.

좌표를 지우는 꼴이 아닌 대칭에도 같은 계산을 쓰려면 변환을 매개변수 $s$ 로 흐르게 두고 $L$ 의 변화를 $s$ 로 1차까지 전개한다. $q$ 를 $q+s$ 로 옮기는 변환에서는 $\partial L/\partial s=\partial L/\partial q$ 이므로 위 계산이 그대로다. 일반 변환에서는 $\partial L/\partial s$ 에 $\partial L/\partial q$ 항과 $\partial L/\partial\dot q$ 항이 함께 나오고, 뒤 항이 앞 항과 묶여 전체가 하나의 시간 미분이 된다.

# 정의

$L(q,\dot q)$ 와 매끄러운 변환족 $Q(s,t)$ 가 $Q(0,t)=q(t)$ 를 만족한다고 하자. 이 족의 **생성자**는

$$
\delta q^i=\left.\frac{\partial Q^i}{\partial s}\right\rvert\_{s=0}
$$

이다. $L$ 이 이 족에 **불변**이라 함은 모든 $s$ 에서 $L(Q,\dot Q)=L(q,\dot q)$ 인 것이다.

**Noether 전하**는

$$
J=\frac{\partial L}{\partial\dot q^i}\thinspace\delta q^i
$$

이다.

**Noether 정리.** $L$ 이 변환족에 불변이면 Euler–Lagrange 방정식의 해를 따라 $J$ 가 상수다.[^1]

# 성질

## 증명의 요지

불변성을 $s=0$ 에서 미분하면

$$
0=\frac{\partial L}{\partial q^i}\thinspace\delta q^i+\frac{\partial L}{\partial\dot q^i}\thinspace\delta\dot q^i
$$

이다. 해를 따라 Euler–Lagrange 방정식이 $\partial L/\partial q^i=\frac{d}{dt}(\partial L/\partial\dot q^i)$ 를 주므로 첫 항을 바꿔 넣으면 오른쪽 전체가 $\frac{d}{dt}J$ 와 같다. 따라서 $\frac{d}{dt}J=0$ 이다. ∎

## 전미분까지 허용하는 꼴

불변성을 $L$ 의 변화가 어떤 함수 $F$ 의 시간 미분과 같다는 조건으로 약하게 해도 같은 결론이 나오고, 이때 보존량은 $J-F$ 다. 시간 평행이동이 이 경우에 든다. $L$ 에 $t$ 가 명시적으로 나오지 않으면 보존량이 Hamilton 함수 $H=\frac{\partial L}{\partial\dot q^i}\dot q^i-L$ 이고, 이것이 에너지 보존이다.

## Poisson 괄호로 쓴 대응

심플렉틱 다양체 위에서 $\lbrace J,H\rbrace=0$ 은 두 가지를 동시에 말한다. $J$ 가 $H$ 의 흐름을 따라 상수라는 것과, $J$ 가 만드는 흐름이 $H$ 를 보존한다는 것이다. 괄호가 반대칭이므로 대칭에서 보존량으로 가는 길과 보존량에서 대칭으로 가는 길이 같은 식이다. Lagrange 쪽에서는 앞쪽만 정리의 진술이 된다.

## 변환족의 연속성

증명이 $s$ 에 대한 미분을 쓰므로 변환족이 연속이어야 한다. 반사처럼 떨어진 대칭은 보존량을 주지 않는다. $L(q,\dot q)=\frac12m\dot q^2-V(q)$ 에서 $V$ 가 짝함수이면 $q\mapsto-q$ 가 $L$ 을 보존하지만 이 대칭에서 나오는 보존량은 없다.

# 활용

- 평행이동 불변에서 운동량, 회전 불변에서 각운동량, 시간 평행이동 불변에서 에너지가 나온다. 세 보존량이 모두 같은 계산의 결과다.
- 변분법에서 Euler–Lagrange 방정식의 1차 적분을 찾는다. [최단강하선 문제](brachistochrone.md)가 쓰는 Beltrami 항등식이 시간 평행이동 쪽 보존량이다.
- [Riemann 계량](riemannian-metrics.md)이 [Killing 벡터장](killing-vector-fields.md)을 가지면 그 방향의 운동량이 [측지선](geodesics.md)을 따라 보존된다. 측지선을 Hamilton 흐름으로 보면 이것이 Noether 전하다.
- [Lie 군](lie-groups.md)이 심플렉틱 다양체에 작용할 때 보존량들을 모아 하나의 사상으로 적는다. 이 사상이 모멘트 사상이다.

[^1]: V. I. Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed., Springer Graduate Texts in Mathematics 60 (1989), 4 장과 20 절. 정리의 진술, 위 증명, 모멘트 사상을 다룬다.

# 연관 문서

## 선수지식

- [변분법](calculus-of-variations.md)
- [Hamilton 역학](hamiltonian-mechanics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry #optimization
