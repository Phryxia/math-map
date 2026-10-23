# Bieberbach 정리

# 개요

**Bieberbach 정리(Bieberbach theorems)** 는 $\mathbb R^n$ 의 결정군에 대한 세 정리다. 결정군의 평행이동 부분군은 유한 지표의 격자이고, 차원마다 결정군은 동형을 빼고 유한 개이며, 동형인 두 결정군은 아핀 변환으로 켤레다. Bieberbach 가 1911 년과 1912 년에 증명했다.[^1]

결정군은 $\mathbb R^n$ 의 [격자 부분군](lattice-subgroups.md) 가운데 등거리변환으로 이루어진 것이고, 그 가운데 고정점 없이 작용하는 것이 콤팩트 평탄 [공간형](space-forms.md)의 기본군이다. 셋째 정리로 콤팩트 평탄 다양체는 기본군으로 분류된다.

# 직관

평면을 정사각형 타일로 덮고 그 무늬를 보존하는 평면의 등거리변환을 모은다. 정수 벡터만큼의 평행이동과 타일 중심이나 꼭짓점을 축으로 하는 $90^\circ$ 회전이 들어 있다. 회전만 모아서는 이런 무늬를 보존하는 군이 되지 않는지 묻는다.

중심이 다른 두 점 $p,q$ 에서 같은 각 $\theta$ 만큼 도는 회전 $\rho_p,\rho_q$ 를 잡으면, $\rho_q\rho_p^{-1}$ 은 회전각이 상쇄되어 평행이동이 되고 그 벡터는 $(I-R_\theta)(q-p)$ 이다. 그래서 무늬의 대칭군에는 평행이동이 반드시 들어 있다.

평행이동 전체가 격자를 이루면 회전도 이 격자를 보존해야 한다. 격자의 기저로 회전을 행렬로 쓰면 성분이 정수이므로 대각합 $2\cos\theta$ 가 정수다. 그러면 $\theta$ 는 $60^\circ$ 나 $90^\circ$ 의 배수뿐이고, 회전각의 종류가 유한하므로 대칭군도 평행이동 격자에 유한 개의 회전을 더한 것이다.

# 정의

## Euclid 등거리변환군

$\mathbb R^n$ 의 등거리변환은 $x\mapsto Ax+a$, $A\in\mathrm O(n)$, $a\in\mathbb R^n$ 꼴이고 이를 $(A,a)$ 로 적는다. 합성은

$$
(A,a)(B,b)=(AB,\thinspace Ab+a)
$$

이고 등거리변환군은 반직접곱 $\mathrm{Isom}(\mathbb R^n)=\mathbb R^n\rtimes\mathrm O(n)$ 이다. $r(A,a)=A$ 는 $\mathrm O(n)$ 으로 가는 준동형사상이고 그 핵은 평행이동 $(I,a)$ 전체다.

## 결정군

$\mathrm{Isom}(\mathbb R^n)$ 의 이산 부분군 $\Gamma$ 의 몫 $\mathbb R^n/\Gamma$ 가 콤팩트하면 $\Gamma$ 를 $n$ 차원 **결정군(crystallographic group, 공간군)** 이라 한다. $T=\Gamma\cap\mathbb R^n$ 을 $\Gamma$ 의 **평행이동 부분군(translation subgroup)**, $r(\Gamma)\subseteq\mathrm O(n)$ 을 **점군(point group)** 이라 한다.

비틀림 원소가 없는 결정군을 **Bieberbach 군(Bieberbach group)** 이라 한다. 이때 $\Gamma$ 는 $\mathbb R^n$ 에 고정점 없이 작용하고, $\mathbb R^n/\Gamma$ 는 기본군이 $\Gamma$ 인 콤팩트 평탄 Riemann 다양체이며 그 홀로노미 군(holonomy group)이 점군이다.

# 성질

## 제1 정리

**정리.** $n$ 차원 결정군 $\Gamma$ 의 평행이동 부분군 $T$ 는 $\mathbb R^n$ 을 생성하는 계수 $n$ 의 격자이고, 점군 $r(\Gamma)\cong\Gamma/T$ 는 유한군이다.[^1]

증명의 요지. $\Vert\cdot\Vert$ 를 연산자 노름이라 하면 교환자의 회전 부분은

$$
\Vert ABA^{-1}B^{-1}-I\Vert\le 2\thinspace\Vert A-I\Vert\thinspace\Vert B-I\Vert
$$

를 만족한다. 회전 부분이 $I$ 에 가까운 원소끼리 교환자를 거듭 취하면 회전 부분이 $I$ 로 빠르게 다가가고, $\Gamma$ 가 이산이므로 이 과정은 유한 번에 평행이동에서 멈춘다. 이로부터 회전 부분이 $I$ 에 충분히 가까운 원소가 평행이동이고, 몫이 콤팩트하다는 조건으로 그 평행이동들이 $\mathbb R^n$ 을 생성함이 증명된다.[^2] 그러면 $r(\Gamma)$ 는 $\mathrm O(n)$ 의 이산 부분군이고, $\mathrm O(n)$ 이 콤팩트이므로 유한군이다.

## 결정학적 제한

점군의 원소는 격자 $T$ 를 보존하므로 $T$ 의 기저로 쓰면 정수 행렬이고 특성다항식의 계수가 정수다. $n=2$ 에서 회전의 대각합 $2\cos\theta$ 가 정수이므로 점군의 회전 차수는 $1,2,3,4,6$ 가운데 하나다. 이것을 **결정학적 제한(crystallographic restriction)** 이라 한다. $n=3$ 에서도 회전축 둘레의 회전 차수는 같은 다섯 가지다.

## 제2 정리

**정리.** 각 $n$ 에서 $n$ 차원 결정군은 동형을 빼고 유한 개다.[^1]

알려진 개수는 다음과 같다.[^2]

| 차원 | 결정군 | Bieberbach 군 |
| ---- | ------ | ------------- |
| 1    | 2      | 1             |
| 2    | 17     | 2             |
| 3    | 219    | 10            |
| 4    | 4783   | 74            |

$2$ 차원의 $17$ 개는 벽지 무늬의 대칭군이다. $3$ 차원 결정군을 방향을 보존하는 아핀 변환으로 분류하면 $230$ 개가 되고, 결정학에서 쓰는 공간군의 수가 이것이다. $2$ 차원의 Bieberbach 군 둘은 원환면과 Klein 병의 기본군이다.

## 제3 정리

**정리.** 두 $n$ 차원 결정군 $\Gamma_1,\Gamma_2$ 가 군으로 동형이면 $\Gamma_2=\alpha\Gamma_1\alpha^{-1}$ 인 아핀 변환 $\alpha$ 가 존재한다.[^1]

따라서 기본군이 동형인 두 콤팩트 평탄 다양체는 아핀 미분동형이다. 기본군이라는 대수적 자료가 평탄 다양체를 아핀 동형까지 정한다.

## 홀로노미가 될 수 있는 군

**정리(Auslander–Kuranishi).** 모든 유한군은 어떤 콤팩트 평탄 다양체의 홀로노미 군이다.[^3]

제1 정리는 점군이 유한이라는 것만 요구하고, 이 정리로 그 밖의 제약이 없음이 증명된다.

# 활용

- 공간형의 평탄 경우에서 콤팩트 평탄 공간형의 분류가 이 정리로 Bieberbach 군의 분류가 된다. $3$ 차원의 $10$ 개 가운데 $6$ 개가 방향가능이다.
- 결정학에서 결정 구조의 대칭은 $3$ 차원 결정군이고, 제2 정리와 결정학적 제한이 공간군 $230$ 개의 목록의 근거다. Hilbert 의 제18 문제(Hilbert's eighteenth problem)의 첫째 질문이 제2 정리로 답해졌다.

[^1]: L. Bieberbach, *Über die Bewegungsgruppen der Euklidischen Räume*, Math. Ann. **70** (1911), 297–336; II, Math. Ann. **72** (1912), 400–412.
[^2]: L. S. Charlap, *Bieberbach Groups and Flat Manifolds*, Universitext, Springer, 1986, 1 장과 3 장.
[^3]: L. Auslander, M. Kuranishi, *On the holonomy group of locally Euclidean spaces*, Ann. of Math. **65** (1957), 411–415.

# 연관 문서

## 선수지식

- [격자 부분군](lattice-subgroups.md)
- [공간형](space-forms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #group_theory #topology
